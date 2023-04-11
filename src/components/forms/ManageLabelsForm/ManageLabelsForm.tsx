import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';

import { Label, Plus, Trash } from '@/components/icons';
import { CustomButton, DashedButton, MenuItem } from '@/components/ui';
import { TAGS_CREATION_LIMITS } from '@/constants';
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
  const { theme } = useThemeContext();
  const { currentSelectedTags, selectTagHandler, tags, fetchTags } =
    useTagManageContext();
  const { t } = useTranslation();

  const handleDeleteTask = (id: string) => {
    if (id) {
      deleteOneTag(id);
      fetchTags();
    }
  };

  const isLimit = tags?.length >= TAGS_CREATION_LIMITS;
  const style = styles(theme, isLimit);

  useEffect(() => {
    fetchTags();
  }, []);

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
            onPress={() => {
              onCreateTagPress();
              vibrate('selection');
            }}>
            {t('CREATE_A_LABEL')}
          </DashedButton>
        </View>
      ) : (
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
              onPressIcon={() => handleDeleteTask(_id)}
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
  );
};
