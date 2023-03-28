import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { BackButtonHeader, Header } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';

import styles from './MainLayout.styles';
import { Props } from './MainLayout.types';

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  navigation,
  withHeader,
  onBack,
  screenTitle = '',
  tasksTotal,
  tasksCurrent,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  const onMenuPress = () => {
    navigation?.navigate('Settings');
  };

  return (
    <>
      <SafeAreaView style={style.topView} />
      <SafeAreaView style={style.backgroundStyle}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.BACKGROUND_PRIMARY}
        />
        <View style={style.mainWrapper}>
          {onBack && <BackButtonHeader title={screenTitle} onPress={onBack} />}
          {withHeader && (
            <Header
              current={tasksCurrent}
              total={tasksTotal}
              onSettingsPress={onMenuPress}
            />
          )}
          <View style={style.contentWrapper}>{children}</View>
        </View>
      </SafeAreaView>
    </>
  );
};
