import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

import { Header } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './MainLayout.styles';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.mainWrapper}>
        <Header />
        {children}
      </View>
    </SafeAreaView>
  );
};
