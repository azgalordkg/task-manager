import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { DashedButton } from '@/components/ui';
import { Tag } from '@/components/ui/Tag';

import styles from './TagsField.styles';
import { Props } from './TagsField.types';

export const TagsField: FC<Props> = ({ tags, onAddPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tags: </Text>
      <View style={styles.tagsWrapper}>
        {tags?.map(({ name, color }) => (
          <Tag onPress={() => {}} key={name} name={name} bgColor={color} />
        ))}
        <DashedButton onPress={onAddPress}>Add</DashedButton>
      </View>
    </View>
  );
};
