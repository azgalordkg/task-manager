import React, { FC } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { CloseCircle, Search } from '@/components/icons';
import { AccentButton } from '@/components/ui';
import { useTasksContext, useThemeContext } from '@/context/hooks';
import { addAlpha } from '@/utils';

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
  const style = styles(theme);

  const handleSearchPress = () => {
    toggleSearchInput();
  };

  const clearSearchValue = () => {
    handleSearchValueChange('');
  };

  const handleCancelPress = () => {
    toggleSearchInput();
    clearSearchValue();
  };

  return (
    <View style={style.container}>
      {inputVisible && (
        <View style={[style.inputContainer]}>
          <Search width={18} height={18} color={theme.ICONS.PRIMARY} />
          <TextInput
            autoFocus
            placeholder="Search"
            placeholderTextColor={theme.TEXT.PRIMARY}
            style={style.input}
            value={searchValue}
            onChangeText={handleSearchValueChange}
          />
          {searchValue.length > 0 && (
            <TouchableOpacity onPress={clearSearchValue}>
              <CloseCircle color={addAlpha(theme.ICONS.PRIMARY, 0.6)} />
            </TouchableOpacity>
          )}
        </View>
      )}
      {inputVisible ? (
        <AccentButton color={theme.BUTTONS.TEXT} onPress={handleCancelPress}>
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
