import { format } from 'date-fns';
import React, { FC } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack, Edit } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { CustomButton } from '@/components/ui';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { Tags } from '@/components/ui/Tags';
import { COLORS } from '@/constants';
import { useTaskModalContext } from '@/context/hooks';
import { deleteOne, findOne } from '@/services/realm';
import { ScreenProps } from '@/types';

import styles from './TaskScreen.styles';

const taskTags = [
  { name: 'Home', color: COLORS.RED },
  { name: 'Family', color: COLORS.ORANGE },
  { name: 'Sport', color: COLORS.BLUE },
];

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  const id = route?.params?.id;
  // TODO need typing for task
  const task: any = findOne(id);
  const { modalVisibleHandler, onSetTaskIdHandler, fetchList } =
    useTaskModalContext();
  const [confirmModalVisible, setConfirmModalVisible] = React.useState(false);

  const handleShowModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeleteTask = () => {
    navigation.goBack();
    setConfirmModalVisible(!confirmModalVisible);
    deleteOne(id);
    fetchList();
  };
  const startDate = task?.startDate;
  const endDate = task?.endDate;

  return (
    <MainLayout>
      <ImageBackground
        style={styles.taskHeaderImage}
        resizeMode="cover"
        source={require('../../assets/img/Bg.png')}>
        <View style={styles.taskHeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBack />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log(123);
              modalVisibleHandler(true);
              onSetTaskIdHandler(id);
            }}>
            <Edit color={COLORS.WHITE} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.taskContentWrapper}>
        <View style={styles.taskTitleWrapper}>
          <View style={styles.taskTitleTagsContainer}>
            <Text style={styles.taskTitle}>{task?.name}</Text>
            <View style={styles.taskTagsContainer}>
              {taskTags.map(taskItem => {
                return <Tags name={taskItem.name} bgColor={taskItem.color} />;
              })}
            </View>
          </View>

          <View style={styles.taskDateContainer}>
            <Text style={styles.taskDateDay}>{format(startDate, 'dd')}</Text>
            <View style={styles.taskMonthWeekContainer}>
              <Text style={styles.taskDateMonth}>
                {format(startDate, 'MMMM')}
              </Text>
              <Text style={styles.taskDateWeekday}>/</Text>
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
          width={'100%'}
          bgColor={COLORS.DARK_GREEN}
          onPress={() => console.log(123)}>
          Duplicate
        </CustomButton>
        <CustomButton
          width={'100%'}
          bgColor={COLORS.LIGHT_GREY}
          textColor={COLORS.RED}
          onPress={handleShowModal}>
          Delete
        </CustomButton>
      </View>

      <ConfirmModal
        visible={confirmModalVisible}
        title={'Confirm Delete'}
        description={'Are you sure you want to delete this task?'}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </MainLayout>
  );
};
