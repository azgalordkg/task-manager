import { yupResolver } from '@hookform/resolvers/yup';
import { isEqual } from 'lodash';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { DateFilter, DismissKeyboard, TagsField } from '@/components/features';
import { ArrowUpSquare, Checkbox as CheckboxIcon } from '@/components/icons';
import { Document } from '@/components/icons/Document';
import { PriorityModal } from '@/components/modals';
import {
  Checkbox,
  CustomDatePicker,
  FormContentWrapper,
  Input,
  InputButton,
  Select,
} from '@/components/ui';
import { COLORS, getRepeatList } from '@/constants';
import { createTaskFormSchema } from '@/constants/validation';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { findOneTask } from '@/services/realm';
import { CreateTaskData, TasksResponseItem } from '@/types';
import {
  getPriorityObject,
  prepareTagsForRender,
  roundAndExtendTimeRange,
} from '@/utils';

import styles from './CreateTaskForm.styles';
import { Props } from './CreateTaskForm.types';

export const CreateTaskForm: FC<Props> = ({
  onSubmit,
  editItemId,
  onAddPress,
}) => {
  const [taskForEdit, setTaskForEdit] = useState({} as TasksResponseItem);
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);

  const startDate = roundAndExtendTimeRange();
  const {
    setTagsForEdit,
    tags: allTags,
    clearSelectedTags,
  } = useTagManageContext();
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  useEffect(() => {
    if (editItemId) {
      setTaskForEdit(findOneTask(editItemId));
    }
  }, [editItemId]);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<CreateTaskData>({
    defaultValues: {
      startDate,
      repeat: 'Never',
      priority: 4,
      hasDeadline: false,
    },
    mode: 'onBlur',
    resolver: yupResolver(createTaskFormSchema),
  });

  const prepareEditData = (task: TasksResponseItem) => {
    const { name, description, hasDeadline, tags, repeat, priority } = task;
    setValue('name', name);

    if (description) {
      setValue('description', description);
    }
    if (task.startDate) {
      setValue('startDate', new Date(task.startDate));
    }
    if (hasDeadline) {
      setValue('hasDeadline', true);
    }

    if (tags?.length) {
      const tagsForEdit = prepareTagsForRender(tags, allTags);
      setTagsForEdit(tagsForEdit.map(({ _id }) => _id));
    } else {
      clearSelectedTags();
    }
    setValue('repeat', repeat);
    setValue('priority', priority);
  };

  useEffect(() => {
    if (editItemId) {
      if (taskForEdit) {
        prepareEditData(taskForEdit);
      }
    } else {
      reset();
      clearSelectedTags();
    }
  }, [editItemId, taskForEdit]);

  const isInitialDataChanged = (
    initialTaskValue: Partial<TasksResponseItem>,
    formValue: CreateTaskData,
  ) => {
    const stringifyValue = JSON.stringify(initialTaskValue);

    const editInitialTaskValue = Object.keys(formValue)?.reduce<CreateTaskData>(
      (result, key) => {
        const objectKey = key as keyof CreateTaskData;
        const isKeyInInitialValue =
          JSON.parse(stringifyValue).hasOwnProperty(objectKey);

        if (isKeyInInitialValue) {
          // TODO need type for result[objectKey]
          // @ts-ignore
          result[objectKey] =
            objectKey === 'startDate'
              ? new Date(initialTaskValue[objectKey] as number)
              : initialTaskValue[objectKey];
        }
        return result;
      },
      {} as CreateTaskData,
    );

    return isEqual(editInitialTaskValue, formValue);
  };

  const isDisabled = !isInitialDataChanged(taskForEdit, watch()) && isValid;
  const title = editItemId ? t('EDIT') : t('CREATE');

  const handleShowPriorityModal = () => {
    setPriorityModalVisible(!priorityModalVisible);
  };

  const activePriority = watch('priority');

  const { label: priorityLabel, color: priorityColor } =
    getPriorityObject(activePriority);

  const handleChangePriority = (priority: number) => {
    setValue('priority', priority);
    handleShowPriorityModal();
  };

  const handleHasDeadlineChange = (value: boolean) => {
    setValue('hasDeadline', value);
    if (editItemId) {
      const now = new Date();

      const currentStartDate = watch('startDate');
      if (currentStartDate) {
        const currentTime = new Date(currentStartDate);
        currentTime.setHours(now.getHours(), now.getMinutes(), 0, 0);
        setValue('startDate', roundAndExtendTimeRange(moment(currentTime)));
      }
    }
  };

  return (
    <DismissKeyboard>
      <FormContentWrapper
        onSubmitPress={handleSubmit(onSubmit)}
        isSubmitDisabled={!isDisabled}
        submitTitle={title}>
        <View style={styles.inputsWrapper}>
          <Input
            icon={<CheckboxIcon type="outline" color={COLORS.GREEN} checked />}
            control={control}
            backgroundColor={theme.INPUT_DEFAULT}
            borderColor={theme.INPUT_DEFAULT}
            color={theme.TEXT_PRIMARY}
            name="name"
            placeholder={`${t('NAME_INPUT_PLACEHOLDER')}`}
            errorMessage={errors.name?.message}
            maxLength={30}
          />
          <Input
            icon={<Document color={COLORS.YELLOW} />}
            control={control}
            backgroundColor={theme.INPUT_DEFAULT}
            borderColor={theme.INPUT_DEFAULT}
            color={theme.TEXT_PRIMARY}
            multiline={true}
            numberOfLines={4}
            name="description"
            placeholder={`${t('DESCRIPTION_INPUT_PLACEHOLDER')}`}
            maxLength={255}
          />
          <Select
            name="repeat"
            control={control}
            items={getRepeatList(t, theme.TEXT_PRIMARY)}
            label={`${t('REPEAT')}`}
          />
          <InputButton
            value={
              activePriority < 4
                ? `${t('PRIORITY')} ${priorityLabel}`
                : undefined
            }
            placeholder={`${t('PRIORITY')}`}
            onPress={handleShowPriorityModal}
            name="priority"
            control={control}
            icon={<ArrowUpSquare color={priorityColor} />}
          />
          <TagsField onAddPress={onAddPress} />
          <View style={styles.dateWrapper}>
            <View>
              <CustomDatePicker
                placeholder="Due date"
                control={control}
                name="startDate"
                title={`${t('DATE_INPUT_PLACEHOLDER')}`}
                mode="date"
              />
            </View>
            <DateFilter
              currentStartDate={watch('startDate')}
              onPressHandler={(key, value) => setValue(key, value)}
            />
          </View>
        </View>

        <Checkbox
          control={control}
          name="hasDeadline"
          onValueChange={handleHasDeadlineChange}
          label={`${t('DUE_TIME')}`}
        />
        {watch('hasDeadline') && (
          <CustomDatePicker
            control={control}
            name="startDate"
            title={`${t('CHOOSE_DATE_INPUT_PLACEHOLDER')}`}
            mode="time"
          />
        )}
      </FormContentWrapper>

      <PriorityModal
        onValueChange={handleChangePriority}
        activePriorityId={activePriority}
        onPressDismiss={handleShowPriorityModal}
        visible={priorityModalVisible}
      />
    </DismissKeyboard>
  );
};
