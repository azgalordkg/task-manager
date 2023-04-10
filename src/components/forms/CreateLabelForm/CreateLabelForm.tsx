import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { Label } from '@/components/icons';
import {
  ColorSelect,
  ConfirmModal,
  FormContentWrapper,
  Input,
} from '@/components/ui';
import {
  AVAILABLE_COLORS,
  COLORS,
  COLORS_FOR_BLACK_CHECKMARK,
} from '@/constants';
import { createLabelFormSchema } from '@/constants/validation';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { createTag, deleteOneTag, findOneTag, updateTag } from '@/services';
import { CreateTagData, TagsResponseItem } from '@/types';
import { vibrate } from '@/utils';

import styles from './CreateLabelForm.styles';
import { Props } from './CreateLabelForm.types';

export const CreateLabelForm: FC<Props> = ({ onClose, editItemId }) => {
  const { theme } = useThemeContext();

  const style = styles(theme);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateTagData>({
    defaultValues: {
      color: AVAILABLE_COLORS[0].toLowerCase(),
    },
    mode: 'onBlur',
    resolver: yupResolver(createLabelFormSchema),
  });

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const { fetchTags } = useTagManageContext();
  const { t } = useTranslation();

  const onSubmit = (data: CreateTagData) => {
    if (editItemId) {
      updateTag({ ...data, _id: editItemId });
    } else {
      createTag(data);
    }

    vibrate('impactHeavy');
    fetchTags();
    onClose();
  };

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
      <FormContentWrapper
        isSubmitDisabled={!isValid}
        onSubmitPress={handleSubmit(onSubmit)}
        onDeletePress={editItemId ? handleShowModal : undefined}
        submitTitle={editItemId ? `${t('EDIT')}` : `${t('CREATE')}`}>
        <View>
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
            <Text style={style.colorTitle}>{t('SELECT_COLOR')}</Text>
            <View style={style.colorList}>
              {AVAILABLE_COLORS.map(color => (
                <ColorSelect
                  active={color.toLowerCase() === watch('color')?.toLowerCase()}
                  onPress={() => {
                    vibrate('selection');
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
      </FormContentWrapper>

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
