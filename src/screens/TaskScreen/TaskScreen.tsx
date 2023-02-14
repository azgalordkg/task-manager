import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Back, Pencil } from '@/components/icons';
import { MainLayout } from '@/components/Layouts';
import { COLORS } from '@/constants';
import { findOne } from '@/services/realm';
import { ScreenProps } from '@/types';

export const TaskScreen: FC<ScreenProps<'Task'>> = ({ route, navigation }) => {
  const id = route?.params?.id;
  const task = findOne(id);

  console.log(task, 'task');

  return (
    <MainLayout>
      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: 20,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                lineHeight: 33,
              }}>
              {task?.name}
            </Text>

            <Pencil color={COLORS.WHITE} />
          </View>
        </View>

        <View>
          <View style={{}} />
        </View>

        <View>
          <Text style={{ color: '#fff' }}>{task?.description}</Text>
        </View>
      </View>
    </MainLayout>
  );
};
