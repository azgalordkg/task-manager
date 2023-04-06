import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (color?: string) =>
  StyleSheet.create({
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 8,
      width: '100%',
    },
    input: {
      width: '100%',
      color: color,
      fontSize: 18,
    },
    errorMessage: {
      color: COLORS.RED,
    },
  });
export default styles;
