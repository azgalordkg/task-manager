import { format } from 'date-fns';
import React, { FC, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { Back, Edit } from '@/components/icons';
import { CustomButton } from '@/components/ui';
import { Tags } from '@/components/ui/Tags';
import { COLORS } from '@/constants';
import { findOne } from '@/services/realm';
import { ScreenProps } from '@/types';

import styles from './TaskScreen.styles';

const taskTags = [
  { name: 'Home', color: COLORS.RED },
  { name: 'Family', color: COLORS.ORANGE },
  { name: 'Sport', color: COLORS.BLUE },
];

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  const id = route?.params?.id;
  const task = findOne(id);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const startDate = task?.startDate;
  const endDate = task?.endDate;

  return (
    <View style={styles.taskWrapper}>
      <ImageBackground
        style={styles.taskHeaderImage}
        source={require('../../assets/img/Bg.png')}>
        <View style={styles.taskHeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCreateModalVisible(!createModalVisible)}>
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
          bgColor={COLORS.SUBMIT_GREEN}
          onPress={() => console.log(123)}>
          Duplicate
        </CustomButton>
        <CustomButton
          width={'100%'}
          bgColor={COLORS.LIGHT_BG}
          textColor={COLORS.RED}
          onPress={() => console.log(123)}>
          Delete
        </CustomButton>
      </View>
    </View>
  );
};
