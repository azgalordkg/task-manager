import React, { FC } from 'react';

import { deleteOne, markTaskAsDone } from '@/services/realm';
import { sortTasksForRender } from '@/utils';

import { DayBlock, ListItem } from '../../ui';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({
  list,
  fetchList,
  onItemPress,
  onEditPress,
}) => {
  return (
    <>
      {list &&
        sortTasksForRender(list).map(key => {
          return (
            <DayBlock date={key} key={key}>
              {list[key].map(
                (
                  { name, isDone, hasDeadline, _id, endDate, startDate },
                  index,
                ) => (
                  <ListItem
                    hasDeadline={hasDeadline}
                    onEditPress={() => onEditPress(_id)}
                    onItemPress={() => onItemPress(_id)}
                    startDate={startDate}
                    endDate={endDate}
                    onCheckPress={() => {
                      markTaskAsDone(_id, !isDone);
                      fetchList();
                    }}
                    onDeletePress={() => {
                      deleteOne(_id);
                      fetchList();
                    }}
                    key={_id}
                    name={name}
                    checked={isDone}
                    isLast={index + 1 === list[key].length}
                  />
                ),
              )}
            </DayBlock>
          );
        })}
    </>
  );
};
