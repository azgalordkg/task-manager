import { format } from 'date-fns';
import React, { FC, useMemo, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack, Edit } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { ConfirmModal, CustomButton, Tag, TextBlank } from '@/components/ui';
import { COLORS } from '@/constants';
import { useTagManageContext, useTaskModalContext } from '@/context/hooks';
import { deleteOneTask, findOneTask } from '@/services/realm';
import { ScreenProps, TagsResponseItem } from '@/types';
import { prepareTagsForRender } from '@/utils';

import styles from './TaskScreen.styles';

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  const id = route?.params?.id;
  const { startDate, endDate, tags, name, description } = findOneTask(id);
  const { fetchList } = useTaskModalContext();
  const { tags: allTags } = useTagManageContext();

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleShowModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeleteTask = () => {
    setConfirmModalVisible(!confirmModalVisible);
    deleteOneTask(id);
    fetchList();
    navigation.goBack();
  };

  const onEditPressHandler = () => {
    navigation.navigate('CreateTask', { id });
  };

  const tagsForRender: TagsResponseItem[] = useMemo(
    () => prepareTagsForRender(tags || [], allTags),
    [allTags, tags],
  );

  return (
    <MainLayout>
      <ImageBackground
        style={styles.taskHeaderImage}
        resizeMode="cover"
        source={require('../../assets/img/taskBackground.jpg')}>
        <View style={styles.taskHeaderContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <ArrowBack />
          </TouchableOpacity>
          <TouchableOpacity onPress={onEditPressHandler}>
            <Edit color={COLORS.WHITE_LIGHT} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.taskContentWrapper}>
        <View style={styles.taskTitleWrapper}>
          <View style={styles.taskTitleTagsContainer}>
            <Text style={styles.taskTitle}>{name}</Text>
            {Boolean(tagsForRender.length) && (
              <View style={styles.taskTagsContainer}>
                {tagsForRender?.map(({ name: taskName, color }) => (
                  <Tag key={name} name={taskName} bgColor={color} />
                ))}
              </View>
            )}
          </View>

          {startDate && endDate && (
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
          )}
        </View>

        <View style={styles.descriptionWrapper}>
          {description ? (
            <Text style={styles.taskDescription}>{description}</Text>
          ) : (
            <TextBlank>No description</TextBlank>
          )}
        </View>
      </View>

      <View style={styles.taskButtonContainer}>
        <CustomButton width={'100%'} bgColor={COLORS.GREEN} onPress={() => {}}>
          Duplicate
        </CustomButton>
        <CustomButton
          width={'100%'}
          bgColor={COLORS.BLACK_MEDIUM}
          textColor={COLORS.RED}
          onPress={handleShowModal}>
          Delete
        </CustomButton>
      </View>

      <ConfirmModal
        visible={confirmModalVisible}
        title="Confirm Deletion"
        confirmButtonLabel="Delete"
        description="Are you sure you want to delete this task?"
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </MainLayout>
  );
};
