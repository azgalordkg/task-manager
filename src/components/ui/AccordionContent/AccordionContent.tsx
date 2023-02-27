import { isEqual } from 'lodash';
import React, { FC } from 'react';
import { FlatList, View } from 'react-native';

import { MemoizedListItem } from '@/components/ui';
import { deleteOne, markTaskAsDone } from '@/services';

import styles from './AccordionContent.styles';
import { Props } from './AccordionContent.types';

const customComparator = (prevProps: Props, nextProps: Props) => {
  return isEqual(prevProps, nextProps);
};

export const AccordionContent: FC<Props> = ({
  content,
  onEditPress,
  onItemPress,
}) => {
  return (
    <>
      <FlatList
        data={content}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({
          item: { hasDeadline, startDate, endDate, isDone, _id, name },
          index,
        }) => (
          <View style={styles.contentContainer}>
            <MemoizedListItem
              hasDeadline={Boolean(hasDeadline)}
              onEditPress={onEditPress}
              onItemPress={onItemPress}
              startDate={startDate}
              endDate={endDate}
              onCheckPress={markTaskAsDone}
              onDeletePress={deleteOne}
              isDone={isDone}
              id={_id}
              name={name}
              checked={Boolean(isDone)}
              isLast={index + 1 === content.length}
            />
          </View>
        )}
        keyExtractor={({ _id }) => _id}
      />
    </>
  );
};

export const MemoizedAccordionContent = React.memo(
  AccordionContent,
  customComparator,
);
