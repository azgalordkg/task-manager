import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { Header } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './MainLayout.styles';
import { Props } from './MainLayout.types';

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  onBack,
  screenTitle,
  isFilter,
  isSettings,
}) => {
  const { theme, isDark } = useThemeContext();
  const style = styles(theme);

  return (
    <>
      <SafeAreaView style={style.topView} />
      <SafeAreaView style={style.backgroundStyle}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        <View style={style.mainWrapper}>
          <Header
            isFilter={isFilter}
            isSettings={isSettings}
            onBack={onBack}
            screenTitle={screenTitle}
          />

          <View style={style.mainWrapper}>{children}</View>
        </View>
      </SafeAreaView>
    </>
  );
};
