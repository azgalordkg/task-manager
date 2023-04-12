import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';

import { Label, Plus, Trash } from '@/components/icons';
import { ConfirmModal } from '@/components/modals';
import { CustomButton, DashedButton, MenuItem } from '@/components/ui';
import { COLORS, TAGS_CREATION_LIMITS } from '@/constants';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { deleteOneTag } from '@/services';
import { vibrate } from '@/utils';

import styles from './ManageLabelsForm.styles';
import { Props } from './ManageLabelsForm.types';

export const ManageLabelsForm: FC<Props> = ({
  onCreateTagPress,
  onEditTagPress,
  isSettings,
}) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const { theme } = useThemeContext();
  const { currentSelectedTags, selectTagHandler, tags, fetchTags } =
    useTagManageContext();
  const { t } = useTranslation();

  const handleDeletePress = (id: string) => {
    handleShowModal();
    setDeleteId(id);
  };

  const handleShowModal = () => {
    setDeleteId('');
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeleteTask = () => {
    if (deleteId) {
      deleteOneTag(deleteId);
      fetchTags();
    }
    handleShowModal();
  };

  const isLimit = tags?.length >= TAGS_CREATION_LIMITS;
  const style = styles(theme, isLimit);

  useEffect(() => {
    fetchTags();
  }, []);

  const onCreateLabelPress = () => {
    onCreateTagPress();
    vibrate('selection');
  };

  return (
    <View style={style.container}>
      <Text style={style.total}>
        {t('TOTAL_LABELS')}:{' '}
        <Text style={style.totalCount}>
          {tags.length}/{TAGS_CREATION_LIMITS}
        </Text>
      </Text>

      {isSettings ? (
        <View style={style.buttonContainer}>
          <DashedButton
            disabled={tags.length >= TAGS_CREATION_LIMITS}
            color={theme.TEXT_SECONDARY}
            icon={Plus}
            variant="large"
            onPress={onCreateLabelPress}>
            {t('CREATE_A_LABEL')}
          </DashedButton>
        </View>
      ) : (
        <CustomButton
          fullWidth
          paddingHorizontal={12}
          bgColor="transparent"
          onPress={onCreateLabelPress}
          disabled={tags.length >= TAGS_CREATION_LIMITS}
          height={32}
          fontSize={16}
          icon={Plus}
          textColor={COLORS.GREEN}
          iconHeight={8}
          iconWidth={8}>
          {t('CREATE_A_LABEL')}
        </CustomButton>
      )}

      {!isSettings && <Text style={style.message}>{t('LABEL_LIMIT')}</Text>}

      <ScrollView style={style.itemsWrapper}>
        {tags.map(({ _id, name, color }, index) => {
          return (
            <MenuItem
              isLast={index === tags.length - 1}
              isFirst={index === 0}
              prependIconColor={color}
              prependIcon={Label}
              icon={isSettings ? Trash : null}
              isCheckbox={!isSettings}
              checked={currentSelectedTags.includes(_id)}
              onPressIcon={() => handleDeletePress(_id)}
              onToggleCheckbox={() => {
                selectTagHandler(_id);
                vibrate('selection');
              }}
              onPress={() => {
                onEditTagPress(_id);
                vibrate('selection');
              }}
              key={_id}>
              {name}
            </MenuItem>
          );
        })}
      </ScrollView>

      <ConfirmModal
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        dismissLabel={`${t('CANCEL_BUTTON')}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </View>
  );
};
