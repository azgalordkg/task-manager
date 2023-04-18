import React, { FC, useState } from 'react';
import { Animated, TextInput, TouchableOpacity, View } from 'react-native';

import { Search } from '@/components/icons';
import { AccentButton } from '@/components/ui';
import { useTasksContext, useThemeContext } from '@/context/hooks';

import styles from './SearchInput.styles';
import { Props } from './SearchInput.types';

export const SearchInput: FC<Props> = ({}) => {
  const {
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  } = useTasksContext();
  const { theme } = useThemeContext();
  const [inputWidth] = useState(new Animated.Value(0));

  const handleSearchPress = () => {
    toggleSearchInput();
    Animated.timing(inputWidth, {
      toValue: inputVisible ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const dynamicStyles = {
    width: inputVisible ? 'auto' : 0,
    flexGrow: inputWidth,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, dynamicStyles]}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={searchValue}
          onChangeText={handleSearchValueChange}
        />
      </Animated.View>
      {inputVisible ? (
        <AccentButton color={theme.BUTTONS.TEXT} onPress={handleSearchPress}>
          Cancel
        </AccentButton>
      ) : (
        <TouchableOpacity onPress={handleSearchPress}>
          <Search color={theme.ICONS.PRIMARY} />
        </TouchableOpacity>
      )}
    </View>
  );
};
