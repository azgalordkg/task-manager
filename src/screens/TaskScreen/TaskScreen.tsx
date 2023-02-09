import React, { FC } from 'react';
import { Text } from 'react-native';

import { MainLayout } from '@/components/Layouts';
import { ScreenProps } from '@/types';

export const TaskScreen: FC<ScreenProps> = ({ route }) => {
  const id = route?.params?.id;

  return (
    <MainLayout>
      <Text>TaskScreen {id}</Text>
    </MainLayout>
  );
};
