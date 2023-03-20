import { yupResolver } from '@hookform/resolvers/yup';
import { isEqual } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, View } from 'react-native';

import { DateFilter, DismissKeyboard, TagsField } from '@/components/features';
import {
  Checkbox,
  CustomDatePicker,
  FormContentWrapper,
  Input,
  Select,
} from '@/components/ui';
import { REPEAT_LIST } from '@/constants';
import { createTaskFormSchema } from '@/constants/validation';
import { useTagManageContext } from '@/context/hooks';
import { findOneTask } from '@/services/realm';
import { CreateTaskData, TasksResponseItem } from '@/types';
import { prepareTagsForRender } from '@/utils';

import styles from './CreateTaskForm.styles';
import { Props } from './CreateTaskForm.types';

export const CreateTaskForm: FC<Props> = ({
  onSubmit,
  editItemId,
  onAddPress,
}) => {
  const startDate = new Date();
  const endDate = new Date();

  startDate.setMinutes(startDate.getMinutes() < 30 ? 0 : 30);
  endDate.setHours(
    startDate.getHours() + 1,
    startDate.getMinutes() < 30 ? 0 : 30,
  );

  const { setTagsForEdit, tags: allTags } = useTagManageContext();

  const [editableTask, setEditableTask] = useState({} as TasksResponseItem);

  useEffect(() => {
    if (editItemId) {
      setEditableTask(findOneTask(editItemId));
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
    if (tags.length) {
      const tagsForEdit = prepareTagsForRender(tags, allTags);
      setTagsForEdit(tagsForEdit.map(({ _id }) => _id));
    }
    setValue('repeat', repeat);
  };

  useEffect(() => {
    if (editItemId) {
      if (editableTask) {
        prepareEditData(editableTask);
      }
    } else {
      reset();
    }
  }, [editItemId]);

  const isDisabled = (
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

  const isDisabledButton = !isDisabled(editableTask, watch()) && isValid;
  const timeInputWidth = Dimensions.get('window').width / 2 - 30;
  const title = editItemId ? 'Edit' : 'Create';

  return (
    <DismissKeyboard>
      <FormContentWrapper
        onSubmitPress={handleSubmit(onSubmit)}
        isSubmitDisabled={!isDisabledButton}
        submitTitle={title}
        title={`${title} task`}>
        <View style={styles.inputWrapper}>
          <Input
            control={control}
            name="name"
            placeholder="Name *"
            errorMessage={errors.name?.message}
            maxLength={30}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            control={control}
            multiline={true}
            numberOfLines={4}
            name="description"
            placeholder="Description (optional)"
            maxLength={255}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Select
            name="repeat"
            control={control}
            items={REPEAT_LIST}
            label="Repeat"
          />
        </View>
        <View style={styles.dateContainer}>
          <View style={styles.inputWrapper}>
            <CustomDatePicker
              label="Date *"
              control={control}
              name="startDate"
              title="Choose date"
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
          label="Set due time"
        />
        {watch('hasDeadline') && (
          <View style={styles.timeContainer}>
            <CustomDatePicker
              inputWidth={timeInputWidth}
              label="Start Time"
              control={control}
              name="startDate"
              title="Choose date"
              mode="time"
            />
            <CustomDatePicker
              inputWidth={timeInputWidth}
              label="End Time"
              control={control}
              name="endDate"
              title="Choose date"
              mode="time"
            />
          </View>
        )}
        <TagsField onAddPress={onAddPress} />
      </FormContentWrapper>
    </DismissKeyboard>
  );
};
