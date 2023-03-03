import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { DismissKeyboard } from '@/components/features';
import { ColorSelect, FormContentWrapper, Input } from '@/components/ui';
import { AVAILABLE_COLORS } from '@/constants';
import { createTagFormSchema } from '@/constants/validation';
import { useTagManageContext } from '@/context/hooks';
import { createTag } from '@/services/realm/tags';
import { CreateTagData } from '@/types';
import { vibrate } from '@/utils';

import styles from './CreateTagForm.styles';
import { Props } from './CreateTagForm.types';

export const CreateTagForm: FC<Props> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<CreateTagData>({
    defaultValues: {
      color: AVAILABLE_COLORS[0].toLowerCase(),
    },
    mode: 'onBlur',
    resolver: yupResolver(createTagFormSchema),
  });

  const { fetchTags } = useTagManageContext();

  const onSubmit = (data: CreateTagData) => {
    createTag(data);
    fetchTags();
    vibrate('impactHeavy');
    onClose();
  };

  return (
    <DismissKeyboard>
      <FormContentWrapper
        isSubmitDisabled={!isValid}
        onSubmitPress={handleSubmit(onSubmit)}
        submitTitle="Create"
        title="Create a tag">
        <View>
          <Input
            control={control}
            name="name"
            placeholder="Tag name *"
            errorMessage={errors.name?.message}
          />
          <View style={styles.colorContainer}>
            <Text style={styles.colorTitle}>Select a color</Text>
            <View style={styles.colorList}>
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
    </DismissKeyboard>
  );
};
