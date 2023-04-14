import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';
const styles = (
  theme: SchemeType,
  isDoneDisabled?: boolean,
  isBold?: boolean,
) =>
  StyleSheet.create({
    text: {
      fontWeight: isBold ? '700' : '500',
      color: theme.BUTTONS.PRIMARY,
      opacity: (isDoneDisabled && 0.3) || 1,
    },
    container: {
      padding: 4,
    },
  });

export default styles;
