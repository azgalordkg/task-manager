import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Cross } from '@/components/icons';
import { COLORS } from '@/constants';

import styles from './CustomDrawer.styles';

export const CustomDrawer: FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn}>
        <Cross color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main', {
            screen: 'Settings',
          });
        }}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
