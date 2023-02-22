import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

import { Header } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './MainLayout.styles';
import { Props } from './MainLayout.types';

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  navigation,
  withHeader,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const style = styles(isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    height: '100%',
  };

  const onMenuPress = () => {
    navigation?.navigate('Settings');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={style.mainWrapper}>
        {withHeader && <Header onSettingsPress={onMenuPress} />}
        <View style={style.contentWrapper}>{children}</View>
      </View>
    </SafeAreaView>
  );
};
