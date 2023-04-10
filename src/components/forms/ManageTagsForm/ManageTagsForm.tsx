import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';

import { Label, Plus } from '@/components/icons';
import {
  CustomButton,
  DashedButton,
  FormContentWrapper,
  MenuItem,
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
      title={isSettings ? '' : `${t('SELECT_LABELS')}`}
      onSubmitPress={() => {
        if (!isSettings) {
          acceptSelectedTags();
        }
        onClose();
      }}>
      <View style={style.container}>
        <Text style={style.total}>
          {t('TOTAL_LABELS')}:{' '}
          <Text style={style.totalCount}>
            {tags.length}/{TAGS_CREATION_LIMITS}
          </Text>
        </Text>
        <CustomButton
          disabled={tags.length >= TAGS_CREATION_LIMITS}
          icon={Plus}
          height={32}
          type="clean"
          textColor={theme.CLEAN_BUTTON_TEXT}
          iconColor={theme.CLEAN_BUTTON_TEXT}
          onPress={() => {
            onCreateTagPress();
            vibrate('selection');
          }}>
          {t('CREATE_A_LABEL')}
        </CustomButton>
        <Text style={style.message}>{t('LABEL_LIMIT')}</Text>
        <ScrollView style={style.itemsWrapper}>
          {tags.map(({ _id, name, color }, index) => {
            return (
              <MenuItem
                isLast={index === tags.length - 1}
                isFirst={index === 0}
                prependIconColor={color}
                prependIcon={Label}
                icon={null}
                isCheckbox
                checked={currentSelectedTags.includes(_id)}
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
      </View>
    </FormContentWrapper>
  );
};
