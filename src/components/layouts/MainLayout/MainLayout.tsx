import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { Header } from '@/components/ui';
import { useThemeContext } from '@/context/hooks/useThemeContext';

import styles from './MainLayout.styles';
import { Props } from './MainLayout.types';

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  navigation,
  withHeader,
}) => {
  const { colorScheme } = useThemeContext();
  const style = styles(colorScheme);

  const onMenuPress = () => {
    navigation?.navigate('Settings');
  };

  return (
    <SafeAreaView style={style.backgroundStyle}>
      <StatusBar barStyle="light-content" backgroundColor={colorScheme.BG} />
      <View style={style.mainWrapper}>
        {withHeader && <Header onSettingsPress={onMenuPress} />}
        <View style={style.contentWrapper}>{children}</View>
      </View>
    </SafeAreaView>
  );
};
