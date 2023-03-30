import React, { FC } from 'react';
import { View } from 'react-native';

import { ManageTagsForm } from '@/components/forms';
import { MainLayout } from '@/components/layouts';
import { ScreenProps } from '@/types';

import styles from './TagsSettingsScreen.styles';

export const TagsSettingsScreen: FC<ScreenProps<'TagsSettings'>> = ({
  navigation,
}) => {
  const handleClose = () => navigation.goBack();

  return (
    <MainLayout onBack={handleClose} screenTitle="Tags">
      <View style={styles.contentWrapper}>
        <ManageTagsForm
          isSettings
          onClose={handleClose}
          onEditTagPress={id => navigation.navigate('CreateTag', { id })}
          onCreateTagPress={() => navigation.navigate('CreateTag')}
        />
      </View>
    </MainLayout>
  );
};
