import { isEqual } from 'lodash';
import React, { FC, memo } from 'react';

import { MemoizedListItem } from '@/components/ui';
import { markTaskAsDone } from '@/services';

import { Props } from './AccordionContent.types';

const customComparator = (prevProps: Props, nextProps: Props) => {
  return isEqual(prevProps, nextProps);
};

export const AccordionContent: FC<Props> = ({
  content,
  onItemPress,
  onDeletePress,
}) => {
  return (
    <>
      {content.map(
        (
          {
            hasDeadline,
            startDate,
            isDone,
            _id,
            name,
            tags,
            repeat,
            description,
          },
          index,
        ) => (
          <MemoizedListItem
            tags={tags}
            key={_id}
            description={description}
            hasDeadline={Boolean(hasDeadline)}
            onItemPress={onItemPress}
            startDate={startDate}
            onCheckPress={markTaskAsDone}
            onDeletePress={onDeletePress}
            isDone={isDone}
            id={_id}
            repeat={repeat}
            name={name}
            checked={Boolean(isDone)}
            isLast={index + 1 === content.length}
          />
        ),
      )}
    </>
  );
};

export const MemoizedAccordionContent = memo(
  AccordionContent,
  customComparator,
);
