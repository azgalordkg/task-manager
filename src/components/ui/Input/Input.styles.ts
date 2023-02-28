import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (textColor?: string) =>
  StyleSheet.create({
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 8,
    },
    input: {
      width: '100%',
      color: textColor,
      fontSize: 18,
    },
    errorMessage: {
      color: COLORS.RED,
    },
  });
export default styles;
