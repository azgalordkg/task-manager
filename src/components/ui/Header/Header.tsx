import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack, Filter, Search, Setting } from '@/components/icons';
import { useThemeContext } from '@/context/hooks';

import styles from './Header.styles';
import { Props } from './Header.types';

export const Header: FC<Props> = ({
  screenTitle,
  navigation,
  onBack,
  isFilter,
  isSettings,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  const onSearchPress = () => {
    console.log('search clicked');
  };

  const onFilterPress = () => {
    console.log('filter clicked');
  };

  const onSettingPress = () => {
    navigation?.navigate('Settings');
  };

  return (
    <View style={style.header}>
      <View style={style.iconContainer}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            <ArrowBack color={theme.TEXT_PRIMARY} />
          </TouchableOpacity>
        )}
        <Text style={style.screenTitle}>{screenTitle}</Text>
      </View>

      <View style={style.iconContainer}>
        {isFilter && (
          <>
            <TouchableOpacity onPress={onSearchPress}>
              <Search color={theme.TEXT_PRIMARY} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onFilterPress}>
              <Filter color={theme.TEXT_PRIMARY} />
            </TouchableOpacity>
          </>
        )}
        {isSettings && (
          <TouchableOpacity onPress={onSettingPress}>
            <Setting color={theme.TEXT_PRIMARY} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
