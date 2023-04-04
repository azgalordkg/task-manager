import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';

import { Plus } from '@/components/icons';
import {
  DashedButton,
  FormContentWrapper,
  SelectTagItem,
} from '@/components/ui';
import { TAGS_CREATION_LIMITS } from '@/constants';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { vibrate } from '@/utils';

import styles from './ManageTagsForm.styles';
import { Props } from './ManageTagsForm.types';

export const ManageTagsForm: FC<Props> = ({
  onClose,
  onCreateTagPress,
  onEditTagPress,
  isSettings,
}) => {
  const { theme } = useThemeContext();
  const {
    currentSelectedTags,
    selectTagHandler,
    acceptSelectedTags,
    tags,
    fetchTags,
  } = useTagManageContext();
  const { t } = useTranslation();

  const isLimit = tags?.length >= TAGS_CREATION_LIMITS;
  const style = styles(theme, isLimit);

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <FormContentWrapper
      submitTitle={t('SUBMIT_TITLE')}
      title={isSettings ? '' : `${t('MANAGE_TAGS')}`}
      onSubmitPress={() => {
        if (!isSettings) {
          acceptSelectedTags();
        }
        onClose();
      }}>
      <View style={style.container}>
        <Text style={style.total}>
          {t('TOTAL_TAGS')}:{' '}
          <Text style={style.totalCount}>
            {tags.length}/{TAGS_CREATION_LIMITS}
          </Text>
        </Text>
        <DashedButton
          disabled={tags.length >= TAGS_CREATION_LIMITS}
          color={theme.TEXT_SECONDARY}
          icon={Plus}
          variant="large"
          onPress={() => {
            onCreateTagPress();
            vibrate('selection');
          }}>
          {t('CREATE_TAG')}
        </DashedButton>
        <Text style={style.message}>{t('TAGS_LIMIT')}</Text>
        <ScrollView style={style.itemsWrapper}>
          {tags.map(({ _id, name, color }) => {
            return (
              <SelectTagItem
                isSettings={isSettings}
                key={_id}
                checked={currentSelectedTags.includes(_id)}
                onPress={() => {
                  selectTagHandler(_id);
                  vibrate('selection');
                }}
                onEditPress={() => {
                  onEditTagPress(_id);
                  vibrate('selection');
                }}
                title={name}
                color={color}
              />
            );
          })}
        </ScrollView>
      </View>
    </FormContentWrapper>
  );
};