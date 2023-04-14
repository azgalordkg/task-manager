import { yupResolver } from '@hookform/resolvers/yup';
import { isEqual } from 'lodash';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import {
  DateFilter,
  DismissKeyboard,
  LabelsField,
} from '@/components/features';
import {
  ArrowUpSquare,
  Checkbox as CheckboxIcon,
  Repeat,
} from '@/components/icons';
import { Document } from '@/components/icons/Document';
import { PriorityModal, RepeatModal } from '@/components/modals';
import {
  Checkbox,
  CustomDatePicker,
  FormContentWrapper,
  Input,
  InputButton,
} from '@/components/ui';
import { COLORS } from '@/constants';
import { createTaskFormSchema } from '@/constants/validation';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { findOneTask } from '@/services/realm';
import {
  CreateTaskData,
  CreateTaskKey,
  RecurringTypes,
  TasksResponseItem,
} from '@/types';
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
  isUnscheduled,
}) => {
  const [taskForEdit, setTaskForEdit] = useState({} as TasksResponseItem);
  const [repeatModalVisible, setRepeatModalVisible] = useState(false);
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);

  const startDate = roundAndExtendTimeRange();
  const {
    setTagsForEdit,
    tags: allTags,
    clearSelectedTags,
  } = useTagManageContext();
  const { theme, isDark } = useThemeContext();
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
      startDate: isUnscheduled ? null : startDate,
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

  const handleShowRepeatModal = () => {
    setRepeatModalVisible(!repeatModalVisible);
  };

  const activePriority = watch('priority');

  const { label: priorityLabel, color: priorityColor } = getPriorityObject(
    isDark,
    activePriority,
  );

  const handleChangePriority = (priority: number) => {
    setValue('priority', priority);
    handleShowPriorityModal();
  };

  const handleChangeRepeat = (repeat: RecurringTypes) => {
    setValue('repeat', repeat);
    handleShowRepeatModal();
  };

  const currentStartDate = watch('startDate');

  const handleHasDeadlineChange = (value: boolean) => {
    setValue('hasDeadline', value);
    if (editItemId) {
      if (currentStartDate) {
        const currentTime = moment(currentStartDate).set({
          hours: moment().hours(),
          minutes: moment().minutes(),
          seconds: 0,
          milliseconds: 0,
        });
        setValue('startDate', roundAndExtendTimeRange(currentTime));
      }
    }
  };

  const onDateFilterChange = (key: CreateTaskKey, value: Date | null) => {
    if (!value) {
      setValue('repeat', 'Never');
      setValue('hasDeadline', false);
    }
    setValue(key, value);
  };

  const repeatValue = watch('repeat');

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
            backgroundColor={theme.BACKGROUND.INPUT}
            color={theme.TEXT.PRIMARY}
            name="name"
            placeholder={`${t('NAME_INPUT_PLACEHOLDER')}`}
            errorMessage={errors.name?.message}
            maxLength={30}
          />
          <Input
            icon={<Document color={COLORS.YELLOW} />}
            control={control}
            backgroundColor={theme.BACKGROUND.INPUT}
            color={theme.TEXT.PRIMARY}
            multiline={true}
            numberOfLines={4}
            name="description"
            placeholder={`${t('DESCRIPTION_INPUT_PLACEHOLDER')}`}
            maxLength={255}
          />
          {currentStartDate && (
            <InputButton
              placeholder={`${t('REPEAT')}`}
              value={repeatValue !== 'Never' ? repeatValue : undefined}
              onPress={handleShowRepeatModal}
              name="priority"
              control={control}
              icon={<Repeat color={COLORS.BLUE} />}
            />
          )}
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
          <LabelsField onAddPress={onAddPress} />
          <View style={styles.dateWrapper}>
            <View>
              <CustomDatePicker
                placeholder={`${t('DUE_DATE')}`}
                control={control}
                name="startDate"
                title={`${t('DATE_INPUT_PLACEHOLDER')}`}
                mode="date"
              />
            </View>
            <DateFilter
              currentStartDate={currentStartDate}
              onPressHandler={onDateFilterChange}
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
      <RepeatModal
        onValueChange={handleChangeRepeat}
        activeValue={repeatValue || 'Never'}
        onPressDismiss={handleShowRepeatModal}
        visible={repeatModalVisible}
      />
    </DismissKeyboard>
  );
};
