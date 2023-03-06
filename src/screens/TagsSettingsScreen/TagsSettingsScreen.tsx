import React, { FC } from 'react';
import { View } from 'react-native';

import { ManageTagsForm } from '@/components/forms';
import { MainLayout } from '@/components/layouts';
import { BackButtonHeader } from '@/components/ui';
import { ScreenProps } from '@/types';

import styles from './TagsSettingsScreen.styles';

export const TagsSettingsScreen: FC<ScreenProps<'TagsSettings'>> = ({
  navigation,
}) => {
  const handleClose = () => navigation.goBack();

  return (
    <MainLayout>
      <View style={styles.contentWrapper}>
        <BackButtonHeader title="Tags" onPress={handleClose} />
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
