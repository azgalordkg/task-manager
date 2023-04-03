import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ManageTagsForm } from '@/components/forms';
import { MainLayout } from '@/components/layouts';
import { ScreenProps } from '@/types';

import styles from './TagsSettingsScreen.styles';

export const TagsSettingsScreen: FC<ScreenProps<'TagsSettings'>> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const handleClose = () => navigation.goBack();

  return (
    <MainLayout onBack={handleClose} screenTitle={`${t('TAGS_SCREEN_TITLE')}`}>
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
