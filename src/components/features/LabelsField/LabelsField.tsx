import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Label as LabelIcon } from '@/components/icons';
import { InputWrapper, Label } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';
import { useGetLabelsQuery } from '@/store/apis/labels';
import { selectSelectedTags } from '@/store/apis/labels/labels.selector';
import { LabelTypes } from '@/types/labels';

import styles from './LabelsField.styles';
import { Props } from './LabelsField.types';

export const LabelsField: FC<Props> = ({ onAddPress }) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const [tags, setTags] = useState<LabelTypes[]>([]);
  const selectedTags = useSelector(selectSelectedTags);
  const { data: allTags = [], refetch } = useGetLabelsQuery();
  const style = styles(theme);

  useEffect(() => {
    if (selectedTags) {
      refetch();

      const filtered = allTags.filter(({ id }) => selectedTags.includes(id));
      setTags(filtered);
    }
  }, [selectedTags]);

  return (
    <View>
      <TouchableOpacity style={style.button} onPress={onAddPress} />

      <InputWrapper backgroundColor={theme.INPUTS.PRIMARY} icon={<LabelIcon />}>
        {tags?.length ? (
          <View style={style.tagsWrapper}>
            {tags?.map(({ name, color, id }) => (
              <Label key={`tags-${id}`} name={name} bgColor={color} />
            ))}
          </View>
        ) : (
          <Text style={style.label}>{t('LABELS')}</Text>
        )}
      </InputWrapper>
    </View>
  );
};
