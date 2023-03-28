import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import {
  ColorSelect,
  ConfirmModal,
  FormContentWrapper,
  Input,
} from '@/components/ui';
import { AVAILABLE_COLORS } from '@/constants';
import { createTagFormSchema } from '@/constants/validation';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { createTag, deleteOneTag, findOneTag, updateTag } from '@/services';
import { CreateTagData, TagsResponseItem } from '@/types';
import { vibrate } from '@/utils';

import styles from './CreateTagForm.styles';
import { Props } from './CreateTagForm.types';

export const CreateTagForm: FC<Props> = ({ onClose, editItemId }) => {
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
    resolver: yupResolver(createTagFormSchema),
  });

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const { fetchTags } = useTagManageContext();

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
        submitTitle={editItemId ? 'Edit' : 'Create'}
        title={`${editItemId ? 'Edit' : 'Create'} a tag`}>
        <View>
          <Input
            control={control}
            name="name"
            placeholder="Tag name *"
            backgroundColor={theme.INPUT_DEFAULT}
            borderColor={theme.INPUT_DEFAULT}
            color={theme.TEXT_PRIMARY}
            errorMessage={errors.name?.message}
          />
          <View style={style.colorContainer}>
            <Text style={style.colorTitle}>Select a color</Text>
            <View style={style.colorList}>
              {AVAILABLE_COLORS.map(color => (
                <ColorSelect
                  active={color.toLowerCase() === watch('color')?.toLowerCase()}
                  onPress={() => {
                    setValue('color', color.toLowerCase());
                  }}
                  key={color}
                  color={color}
                />
              ))}
            </View>
          </View>
        </View>
      </FormContentWrapper>

      <ConfirmModal
        confirmLabel="Delete"
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </DismissKeyboard>
  );
};
