import React, { FC, useState } from 'react';
import { View } from 'react-native';

import { QuickTaskForm } from '@/components/forms';
import { Plus } from '@/components/icons';
import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';

import styles from './QuickTask.styles';
import { Props } from './QuickTask.types';

export const QuickTask: FC<Props> = ({ date }) => {
  const [showInput, setShowInput] = useState(false);
  const { theme, activeTheme } = useThemeContext();
  const textColor = activeTheme === 'light' ? COLORS.GREY_MEDIUM : COLORS.WHITE;

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      {showInput ? (
        <QuickTaskForm date={date} handleShowInput={handleShowInput} />
      ) : (
        <View style={styles.buttonWrapper}>
          <CustomButton
            bgColor={theme.BUTTONS_NEUTRAL}
            onPress={handleShowInput}
            width="100%"
            icon={Plus}
            textColor={textColor}
            iconColor={textColor}>
            Add quick task
          </CustomButton>
        </View>
      )}
    </>
  );
};
