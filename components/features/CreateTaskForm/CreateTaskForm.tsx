import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {BrakeLine, CustomDatePicker, Input, CustomButton} from '../../ui';
import {useForm} from 'react-hook-form';
import styles from './CreateTaskForm.styles';
import {Props} from './CreateTaskForm.types';
import {CreateTaskData} from '../../../types';
import {COLORS} from '../../../constants';
import {getDayAfterToday, getToday} from '../../../services';
import {format} from 'date-fns';

export const CreateTaskForm: FC<Props> = ({onSubmit}) => {
  const {control, handleSubmit, setValue} = useForm<CreateTaskData>({
    defaultValues: {
      startDate: new Date(),
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Create task</Text>
      </View>
      <BrakeLine isDark />
      <View style={styles.fieldsWrapper}>
        <View style={styles.inputWrapper}>
          <Input control={control} name="name" placeholder="Name *" />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            control={control}
            multiline={true}
            numberOfLines={4}
            name="description"
            placeholder="Description (optional)"
          />
        </View>
        <View>
          <Text style={styles.dateTitle}>Date and time</Text>
          <CustomDatePicker
            control={control}
            name="startDate"
            title="Choose date"
            mode="date"
          />
          <View style={styles.dateButtonsWrapper}>
            <View style={styles.dateButtonContainer}>
              <CustomButton
                height={30}
                borderWidth={1}
                padding={5}
                fontSize={14}
                type="outlined"
                onPress={() => setValue('startDate', getToday())}>
                Today
              </CustomButton>
            </View>
            <View style={styles.dateButtonContainer}>
              <CustomButton
                height={30}
                borderWidth={1}
                padding={5}
                fontSize={14}
                type="outlined"
                onPress={() => setValue('startDate', getDayAfterToday(1))}>
                Tomorrow
              </CustomButton>
            </View>
            {Array.from({length: 3}).map((_, index) => {
              const day = getDayAfterToday(index + 2);
              return (
                <View key={day.getDay()} style={styles.dateButtonContainer}>
                  <CustomButton
                    height={30}
                    borderWidth={1}
                    padding={5}
                    fontSize={14}
                    type="outlined"
                    onPress={() => setValue('startDate', day)}>
                    {`${day.getDate()} ${format(day, 'MMM')}`}
                  </CustomButton>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <CustomButton
        fullWidth
        height={50}
        bgColor={COLORS.RED}
        onPress={handleSubmit(onSubmit)}>
        Create
      </CustomButton>
    </View>
  );
};
