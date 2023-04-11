import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';

import { Label as LabelIcon } from '@/components/icons';
import { InputWrapper, Label } from '@/components/ui';
import { useTagManageContext, useThemeContext } from '@/context/hooks';
import { TagsResponseItem } from '@/types';

import styles from './TagsField.styles';
import { Props } from './TagsField.types';

export const TagsField: FC<Props> = ({ onAddPress }) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const style = styles(theme);
  const [tags, setTags] = useState<TagsResponseItem[]>([]);
  const { selectedTags, tags: allTags, fetchTags } = useTagManageContext();

  useEffect(() => {
    if (selectedTags) {
      fetchTags();

      const filtered = allTags.filter(({ _id }) => selectedTags.includes(_id));
      setTags(filtered);
    }
  }, [selectedTags]);

  return (
    <View>
      <TouchableOpacity style={style.button} onPress={onAddPress} />
      <InputWrapper
        borderColor={theme.INPUT_DEFAULT}
        backgroundColor={theme.INPUT_DEFAULT}
        icon={<LabelIcon />}>
        {tags?.length ? (
          <View style={style.tagsWrapper}>
            {tags?.map(({ name, color, _id }) => (
              <Label key={name} name={name} bgColor={color} />
            ))}
          </View>
        ) : (
          <Text style={style.label}>{t('LABELS')}</Text>
        )}
      </InputWrapper>
    </View>
  );
};
