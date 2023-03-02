import { format } from 'date-fns';
import React, { FC, useMemo } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack, Edit } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { CustomButton, TextBlank } from '@/components/ui';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { Tag } from '@/components/ui/Tag';
import { COLORS } from '@/constants';
import { useTagManageContext, useTaskModalContext } from '@/context/hooks';
import { deleteOneTask, findOneTask } from '@/services/realm';
import { ScreenProps, TagsResponseItem } from '@/types';
import { prepareTagsForRender } from '@/utils';

import styles from './TaskScreen.styles';

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  const id = route?.params?.id;
  // TODO need typing for task
  const task = findOneTask(id);
  const { fetchList } = useTaskModalContext();
  const { tags: allTags } = useTagManageContext();

  const [confirmModalVisible, setConfirmModalVisible] = React.useState(false);

  const handleShowModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeleteTask = () => {
    navigation.goBack();
    setConfirmModalVisible(!confirmModalVisible);
    deleteOneTask(id);
    fetchList();
  };
  const startDate = task?.startDate;
  const endDate = task?.endDate;
  const tags = task?.tags;

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
            <Edit color={COLORS.WHITE} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.taskContentWrapper}>
        <View style={styles.taskTitleWrapper}>
          <View style={styles.taskTitleTagsContainer}>
            <Text style={styles.taskTitle}>{task?.name}</Text>
            <View style={styles.taskTagsContainer}>
              {tagsForRender?.map(({ name, color }) => (
                <Tag key={name} name={name} bgColor={color} />
              ))}
            </View>
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
          {task?.description ? (
            <Text style={styles.taskDescription}>{task.description}</Text>
          ) : (
            <TextBlank>No description</TextBlank>
          )}
        </View>
      </View>

      <View style={styles.taskButtonContainer}>
        <CustomButton
          width={'100%'}
          bgColor={COLORS.DARK_GREEN}
          onPress={() => {}}>
          Duplicate
        </CustomButton>
        <CustomButton
          width={'100%'}
          bgColor={COLORS.GREY_BG}
          textColor={COLORS.RED}
          onPress={handleShowModal}>
          Delete
        </CustomButton>
      </View>

      <ConfirmModal
        visible={confirmModalVisible}
        title="Confirm Delete"
        description="Are you sure you want to delete this task?"
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </MainLayout>
  );
};
