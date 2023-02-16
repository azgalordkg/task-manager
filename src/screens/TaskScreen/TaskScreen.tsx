import React, { FC } from 'react';
import { Text } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { ScreenProps } from '@/types';

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route }) => {
  const id = route?.params?.id;

  return (
    <MainLayout>
      <Text>TaskScreen {id}</Text>
    </MainLayout>
  );
};
