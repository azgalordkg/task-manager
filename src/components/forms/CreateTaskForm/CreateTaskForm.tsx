import { yupResolver } from '@hookform/resolvers/yup';
import { isEqual } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Dimensions, View } from 'react-native';

import { DateFilter, DismissKeyboard, TagsField } from '@/components/features';
import {
  Checkbox,
  ConfirmModal,
  CustomDatePicker,
  FormContentWrapper,
  Input,
  Select,
} from '@/components/ui';
import { REPEAT_LIST } from '@/constants';
import { createTaskFormSchema } from '@/constants/validation';
import {
  useTagManageContext,
  useTaskModalContext,
  useThemeContext,
} from '@/context/hooks';
import { deleteOneTask, findOneTask } from '@/services/realm';
import { CreateTaskData, TasksResponseItem } from '@/types';
import { prepareTagsForRender, roundAndExtendTimeRange } from '@/utils';

import styles from './CreateTaskForm.styles';
import { Props } from './CreateTaskForm.types';

export const CreateTaskForm: FC<Props> = ({
  onSubmit,
  editItemId,
  onAddPress,
}) => {
  const [taskForEdit, setTaskForEdit] = useState({} as TasksResponseItem);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const { startDate, endDate } = roundAndExtendTimeRange();
  const { setTagsForEdit, tags: allTags } = useTagManageContext();
  const { fetchList } = useTaskModalContext();
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
      endDate,
      repeat: 'Never',
      hasDeadline: false,
    },
    mode: 'onBlur',
    resolver: yupResolver(createTaskFormSchema),
  });

  const { theme } = useThemeContext();

  const prepareEditData = (task: TasksResponseItem) => {
    const { name, description, hasDeadline, tags, repeat } = task;
    setValue('name', name);
    if (description) {
      setValue('description', description);
    }
    if (task.startDate && task.endDate) {
      setValue('startDate', new Date(task.startDate));
      setValue('endDate', new Date(task.endDate));
    }
    if (hasDeadline) {
      setValue('hasDeadline', true);
    }
    if (tags?.length) {
      const tagsForEdit = prepareTagsForRender(tags, allTags);
      setTagsForEdit(tagsForEdit.map(({ _id }) => _id));
    }
    setValue('repeat', repeat);
  };

  useEffect(() => {
    if (editItemId) {
      if (taskForEdit) {
        prepareEditData(taskForEdit);
      }
    } else {
      reset();
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
        const dateException = ['endDate', 'startDate'];
        const isKeyInInitialValue =
          JSON.parse(stringifyValue).hasOwnProperty(objectKey);

        if (isKeyInInitialValue) {
          // TODO need type for result[objectKey]
          // @ts-ignore
          result[objectKey] = dateException.includes(objectKey)
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
  const timeInputWidth = Dimensions.get('window').width / 2 - 30;
  const title = editItemId ? t('EDIT') : t('CREATE');

  const handleShowModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeleteTask = () => {
    if (editItemId) {
      deleteOneTask(editItemId);
    }
    fetchList();
    handleShowModal();
  };

  return (
    <DismissKeyboard>
      <FormContentWrapper
        onSubmitPress={handleSubmit(onSubmit)}
        isSubmitDisabled={!isDisabled}
        onDeletePress={editItemId ? handleShowModal : undefined}
        submitTitle={title}
        title={`${title} ${t('TASK')}`}>
        <View style={styles.inputWrapper}>
          <Input
            control={control}
            backgroundColor={theme.INPUT_DEFAULT}
            borderColor={theme.INPUT_DEFAULT}
            color={theme.TEXT_PRIMARY}
            name="name"
            placeholder={`${t('NAME_INPUT_PLACEHOLDER')}`}
            errorMessage={errors.name?.message}
            maxLength={30}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Input
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
        </View>
        <View style={styles.inputWrapper}>
          <Select
            name="repeat"
            control={control}
            items={REPEAT_LIST}
            label={`${t('REPEAT')}`}
          />
        </View>
        <View style={styles.dateContainer}>
          <View style={styles.inputWrapper}>
            <CustomDatePicker
              label={`${t('DATE_INPUT_LABEL')}`}
              control={control}
              name="startDate"
              title={`${t('DATE_INPUT_PLACEHOLDER')}`}
              mode="date"
            />
          </View>
          <DateFilter
            currentStartDate={watch('startDate')}
            currentEndDate={watch('endDate')}
            onPressHandler={setValue}
          />
        </View>

        <Checkbox
          control={control}
          name="hasDeadline"
          onValueChange={value => setValue('hasDeadline', value)}
          label={`${t('SET_DUE_TIME')}`}
        />
        {watch('hasDeadline') && (
          <View style={styles.timeContainer}>
            <CustomDatePicker
              inputWidth={timeInputWidth}
              label={`${t('START_TIME_INPUT_LABEL')}`}
              control={control}
              name="startDate"
              title={`${t('CHOOSE_DATE_INPUT_PLACEHOLDER')}`}
              mode="time"
              setValue={setValue}
            />
            <CustomDatePicker
              inputWidth={timeInputWidth}
              label={`${t('END_TIME_INPUT_LABEL')}`}
              control={control}
              name="endDate"
              title={`${t('CHOOSE_DATE_INPUT_PLACEHOLDER')}`}
              mode="time"
              setValue={setValue}
            />
          </View>
        )}
        <TagsField onAddPress={onAddPress} />
      </FormContentWrapper>

      <ConfirmModal
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </DismissKeyboard>
  );
};
