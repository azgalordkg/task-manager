import { isEqual } from 'lodash';
import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { QuickTask } from '@/components/features';
import { MemoizedListItem } from '@/components/ui';
import { deleteOne, markTaskAsDone } from '@/services';

import styles from './AccordionContent.styles';
import { Props } from './AccordionContent.types';

const customComparator = (prevProps: Props, nextProps: Props) => {
  return isEqual(prevProps, nextProps);
};

export const AccordionContent: FC<Props> = ({
  content,
  title,
  onEditPress,
  onItemPress,
}) => {
  return (
    <>
      {content.map(
        ({ hasDeadline, startDate, endDate, isDone, _id, name }, index) => (
          <View key={_id} style={styles.contentContainer}>
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
        ),
      )}
      <View style={styles.buttonContainer}>
        <QuickTask date={title} />
      </View>
    </>
  );
};

export const MemoizedAccordionContent = memo(
  AccordionContent,
  customComparator,
);
