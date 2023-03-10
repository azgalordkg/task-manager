import React, { FC, useState } from 'react';
import { View } from 'react-native';

import { QuickTaskForm } from '@/components/forms';
import { Plus } from '@/components/icons';
import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';

import styles from './QuickTask.styles';
import { Props } from './QuickTask.types';

export const QuickTask: FC<Props> = ({ date }) => {
  const [showInput, setShowInput] = useState(false);

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
            bgColor={COLORS.GREY_MEDIUM}
            onPress={handleShowInput}
            width="100%"
            icon={Plus}>
            Add quick task
          </CustomButton>
        </View>
      )}
    </>
  );
};
