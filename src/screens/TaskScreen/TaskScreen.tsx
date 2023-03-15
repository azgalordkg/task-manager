import { format } from 'date-fns';
import React, { FC, useMemo, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack, Edit } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { ConfirmModal, CustomButton, Tag, TextBlank } from '@/components/ui';
import { COLORS } from '@/constants';
import {
  useTagManageContext,
  useTaskModalContext,
  useThemeContext,
} from '@/context/hooks';
import { deleteOneTask, findOneTask } from '@/services/realm';
import { ScreenProps, TagsResponseItem } from '@/types';
import { prepareTagsForRender } from '@/utils';

import darkThemeBackground from '../../assets/img/darkTaskBg.jpg';
import lightThemeBackground from '../../assets/img/lightTaskBg.jpg';
import styles from './TaskScreen.styles';

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  const id = route?.params?.id;
  const { startDate, endDate, tags, name, description } = findOneTask(id);
  const { fetchList } = useTaskModalContext();
  const { tags: allTags } = useTagManageContext();
  const { theme, activeTheme } = useThemeContext();

  const style = styles(theme);

  const backgroundImage =
    activeTheme === 'dark' ? darkThemeBackground : lightThemeBackground;

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
        style={style.taskHeaderImage}
        resizeMode="cover"
        source={backgroundImage}>
        <View style={style.taskHeaderContainer}>
          <TouchableOpacity
            style={style.backButton}
            onPress={() => navigation.goBack()}>
            <ArrowBack color={theme.TEXT_PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onEditPressHandler}>
            <Edit color={theme.TEXT_PRIMARY} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={style.taskContentWrapper}>
        <View style={style.taskTitleWrapper}>
          <View style={style.taskTitleTagsContainer}>
            <Text style={style.taskTitle}>{name}</Text>
            {Boolean(tagsForRender.length) && (
              <View style={style.taskTagsContainer}>
                {tagsForRender?.map(({ name: taskName, color }) => (
                  <Tag key={name} name={taskName} bgColor={color} />
                ))}
              </View>
            )}
          </View>

          {startDate && endDate && (
            <View style={style.taskDateContainer}>
              <Text style={style.taskDateDay}>{format(startDate, 'dd')}</Text>
              <View style={style.taskMonthWeekContainer}>
                <Text style={style.taskDateMonth}>
                  {format(startDate, 'MMMM')}
                </Text>
                <Text style={style.taskDateWeekday}>/</Text>
                <Text style={style.taskDateWeekday}>
                  {format(startDate, 'EEEE')}
                </Text>
              </View>
              <Text style={style.taskDatePeriod}>
                {format(startDate, 'h:mm a')} - {format(endDate, 'h:mm a')}
              </Text>
            </View>
          )}
        </View>

        <View style={style.descriptionWrapper}>
          {description ? (
            <Text style={style.taskDescription}>{description}</Text>
          ) : (
            <TextBlank>No description</TextBlank>
          )}
        </View>
      </View>

      <View style={style.taskButtonContainer}>
        <CustomButton width={'100%'} bgColor={COLORS.GREEN} onPress={() => {}}>
          Duplicate
        </CustomButton>
        <CustomButton
          width={'100%'}
          bgColor={theme.BUTTONS_SECONDARY}
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
