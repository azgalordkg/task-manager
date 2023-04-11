import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { Label } from '@/components/icons';
import { ColorSelect, ConfirmModal, Input } from '@/components/ui';
import {
  AVAILABLE_COLORS,
  COLORS,
  COLORS_FOR_BLACK_CHECKMARK,
} from '@/constants';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { deleteOneTag, findOneTag } from '@/services';
import { TagsResponseItem } from '@/types';
import { vibrate } from '@/utils';

import styles from './CreateLabelForm.styles';
import { Props } from './CreateLabelForm.types';

export const CreateLabelForm: FC<Props> = ({
  onClose,
  editItemId,
  formHandler,
}) => {
  const { theme } = useThemeContext();

  const {
    control,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = formHandler;

  const isColorError = errors.color?.message;
  const style = styles(theme, isColorError);

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const { fetchTags } = useTagManageContext();
  const { t } = useTranslation();

  const prepareEditData = (tag: TagsResponseItem) => {
    const { name, color } = tag;

    setValue('name', name);
    setValue('color', color);
  };

  const handleShowModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeleteTask = () => {
    if (editItemId) {
      deleteOneTag(editItemId);
      fetchTags();
    }
    setConfirmModalVisible(!confirmModalVisible);
    onClose();
  };

  useEffect(() => {
    if (editItemId) {
      const tag = findOneTag(editItemId);
      if (tag) {
        prepareEditData(tag);
      }
    } else {
      reset();
    }
  }, [editItemId]);

  return (
    <DismissKeyboard>
      <View style={style.contentWrapper}>
        <Input
          control={control}
          name="name"
          placeholder={`${t('LABEL_NAME_INPUT_PLACEHOLDER')}`}
          backgroundColor={theme.INPUT_DEFAULT}
          borderColor={theme.INPUT_DEFAULT}
          color={theme.TEXT_PRIMARY}
          errorMessage={errors.name?.message}
          icon={<Label color={watch().color || theme.TEXT_SECONDARY} />}
        />
        <View style={style.colorContainer}>
          <View style={style.textContainer}>
            <Text style={style.colorTitle}>{t('SELECT_COLOR')}</Text>
            {isColorError && (
              <Text style={style.errorMessage}>{t('LABEL_COLOR_ERROR')}</Text>
            )}
          </View>

          <View style={style.colorList}>
            {AVAILABLE_COLORS.map(color => (
              <ColorSelect
                active={color.toLowerCase() === watch('color')?.toLowerCase()}
                onPress={() => {
                  vibrate('selection');
                  void trigger('color');
                  setValue('color', color.toLowerCase());
                }}
                key={color}
                color={color}
                checkMarkColor={
                  COLORS_FOR_BLACK_CHECKMARK.includes(color.toLowerCase())
                    ? COLORS.BLACK_DARK
                    : COLORS.WHITE
                }
              />
            ))}
          </View>
        </View>
      </View>

      <ConfirmModal
        confirmLabel={`${t('CONFIRM_MODAL_DELETE')}`}
        dismissLabel={`${t('CANCEL_BUTTON')}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </DismissKeyboard>
  );
};
