import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import {
  ConfirmModal,
  CustomButton,
  ModalWrapper,
  Tag,
  TextBlank,
} from '@/components/ui';
import { COLORS } from '@/constants';
import {
  useTagManageContext,
  useTaskModalContext,
  useThemeContext,
} from '@/context/hooks';
import { deleteOneTask, findOneTask } from '@/services/realm';
import { ScreenProps, TagsResponseItem } from '@/types';
import { formatDate, prepareTagsForRender } from '@/utils';

import styles from './TaskScreen.styles';

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  // TODO Remove this screen later
  const id = route?.params?.id;
  const { startDate, endDate, tags, name, description } = findOneTask(id);
  const { fetchList } = useTaskModalContext();
  const { tags: allTags } = useTagManageContext();
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const style = styles(theme);

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

  const handleCloseModal = () => navigation.goBack();

  return (
    <ModalWrapper responsiveHeight onRequestClose={handleCloseModal}>
      <View style={style.taskContentWrapper}>
        <View style={style.taskTitleWrapper}>
          <View style={style.taskTitleTagsContainer}>
            <Text style={style.taskTitle}>{name}</Text>
            {Boolean(tagsForRender.length) && (
              <View style={style.taskTagsContainer}>
                {tagsForRender?.map(({ name: taskName, color }) => (
                  <Tag key={taskName} name={taskName} bgColor={color} />
                ))}
              </View>
            )}
          </View>

          {startDate && endDate && (
            <View style={style.taskDateContainer}>
              <Text style={style.taskDateDay}>
                {formatDate(startDate, 'DD')}
              </Text>
              <View style={style.taskMonthWeekContainer}>
                <Text style={style.taskDateMonth}>
                  {formatDate(startDate, 'MMMM')}
                </Text>
                <Text style={style.taskDateWeekday}>/</Text>
                <Text style={style.taskDateWeekday}>
                  {formatDate(startDate, 'dddd')}
                </Text>
              </View>
              <Text style={style.taskDatePeriod}>
                {formatDate(startDate, 'h:mm A')} -
                {formatDate(endDate, 'h:mm A')}
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
        {/*<CustomButton width={'100%'} bgColor={COLORS.GREEN} onPress={() => {}}>
          Duplicate
        </CustomButton>*/}
        <CustomButton width={'48%'} onPress={onEditPressHandler}>
          Edit
        </CustomButton>
        <CustomButton
          width={'48%'}
          bgColor={theme.BUTTONS_SECONDARY}
          textColor={COLORS.RED}
          onPress={handleShowModal}>
          Delete
        </CustomButton>
      </View>

      <ConfirmModal
        visible={confirmModalVisible}
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        dismissLabel={`${t('CANCEL_BUTTON')}`}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </ModalWrapper>
  );
};
