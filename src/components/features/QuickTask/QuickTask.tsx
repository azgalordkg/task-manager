import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { QuickTaskForm } from '@/components/forms';
import { Plus } from '@/components/icons';
import { CustomButton } from '@/components/ui';
import { COLORS } from '@/constants';
import { vibrate } from '@/utils';

import styles from './QuickTask.styles';

export const QuickTask: FC = () => {
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();

  const handleShowInput = () => {
    vibrate();
    setShowInput(!showInput);
  };

  return (
    <>
      {showInput ? (
        <QuickTaskForm handleShowInput={handleShowInput} />
      ) : (
        <View style={styles.buttonWrapper}>
          <CustomButton
            fullWidth
            paddingHorizontal={12}
            orientation="flex-start"
            bgColor="transparent"
            onPress={handleShowInput}
            height={32}
            fontSize={14}
            icon={Plus}
            textColor={COLORS.GREEN}
            iconHeight={8}
            iconWidth={8}>
            {t('ADD_QUICK_TASK')}
          </CustomButton>
        </View>
      )}
    </>
  );
};
