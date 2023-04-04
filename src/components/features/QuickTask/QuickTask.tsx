import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { QuickTaskForm } from '@/components/forms';
import { Plus } from '@/components/icons';
import { CustomButton } from '@/components/ui';
import { useThemeContext } from '@/context/hooks';
import { vibrate } from '@/utils';

import styles from './QuickTask.styles';
import { Props } from './QuickTask.types';

export const QuickTask: FC<Props> = ({ date }) => {
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  const handleShowInput = () => {
    vibrate();
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
            textColor={theme.TEXT_SECONDARY}
            iconColor={theme.TEXT_SECONDARY}>
            {t('ADD_QUICK_TASK')}
          </CustomButton>
        </View>
      )}
    </>
  );
};
