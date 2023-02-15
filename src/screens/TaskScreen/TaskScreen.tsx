import { format } from 'date-fns';
import React, { FC, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { CreateTaskForm } from '@/components/features';
import { Back, Pencil } from '@/components/icons';
import { MainLayout } from '@/components/Layouts';
import { CustomButton, ModalComponent } from '@/components/ui';
import { COLORS } from '@/constants';
import { findOne, updateTask } from '@/services/realm';
import { ScreenProps, UpdateTaskData } from '@/types';

import styles from './TaskScreen.styles';

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  const id = route?.params?.id;
  const task = findOne(id);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const startDate = task?.startDate;
  const endDate = task?.endDate;

  const handleModalClose = () => {
    setCreateModalVisible(false);
  };

  const createTaskHandler = (data: FieldValues) => {
    updateTask({ ...data, _id: id } as UpdateTaskData);
    setCreateModalVisible(false);
  };

  return (
    <MainLayout>
      <View style={styles.taskWrapper}>
        <View style={styles.taskHeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>

          <View style={styles.taskTitleContainer}>
            <Text style={styles.taskTitle}>{task?.name}</Text>

            <TouchableOpacity
              onPress={() => setCreateModalVisible(!createModalVisible)}>
              <Pencil color={COLORS.WHITE} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.taskImageContainer}>
          <Image source={require('../../assets/img/taskImage.png')} />
          <View style={styles.taskImageDateContainer}>
            <View style={styles.taskDateContainer}>
              <Text style={styles.taskDateDay}>{format(startDate, 'dd')}</Text>
              <Text style={styles.taskDateMonth}>
                {format(startDate, 'MMMM')}
              </Text>
              <Text style={styles.taskDateWeekday}>
                {format(startDate, 'EEEE')}
              </Text>
            </View>

            <Text style={styles.taskDatePeriod}>
              {format(startDate, 'h:mm a')} - {format(endDate, 'h:mm a')}
            </Text>
          </View>
        </View>

        <Text style={styles.taskDescription}>{task?.description}</Text>
      </View>

      <View style={styles.taskButtonContainer}>
        <CustomButton
          width={'48%'}
          bgColor={COLORS.DARK_GREEN}
          onPress={() => console.log(123)}>
          Duplicate
        </CustomButton>

        <CustomButton
          width={'48%'}
          bgColor={COLORS.RED}
          onPress={() => console.log(123)}>
          Delete
        </CustomButton>
      </View>

      <ModalComponent
        visible={createModalVisible}
        onRequestClose={handleModalClose}>
        <CreateTaskForm editItemId={id} onSubmit={createTaskHandler} />
      </ModalComponent>
    </MainLayout>
  );
};
