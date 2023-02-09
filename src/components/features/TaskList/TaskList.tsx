import React, { FC } from 'react';

import { deleteOne, markTaskAsDone } from '@/services/realm';

import { DayBlock, ListItem } from '../../ui';
import { Props } from './TaskList.types';

export const TaskList: FC<Props> = ({ list, fetchList, navigation }) => {
  return (
    <>
      {list &&
        Object.keys(list).map(key => {
          return (
            <DayBlock date={key} key={key}>
              {list[key].map(
                ({ name, isDone, _id, endDate, startDate }, index) => (
                  <ListItem
                    onItemPress={() =>
                      navigation?.navigate('Task', { id: _id })
                    }
                    startDate={startDate}
                    endDate={endDate}
                    onCheckPress={() => {
                      markTaskAsDone(_id, isDone ? 0 : 1);
                      fetchList();
                    }}
                    onDeletePress={() => {
                      deleteOne(_id);
                      fetchList();
                    }}
                    key={_id}
                    name={name}
                    checked={Boolean(isDone)}
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
