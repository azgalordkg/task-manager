import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (errorMessage?: string) =>
  StyleSheet.create({
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 8,
    },
    wrapper: {
      borderWidth: 1,
      borderColor: errorMessage ? COLORS.RED : COLORS.INPUT_BG,
      padding: 11,
      backgroundColor: COLORS.INPUT_BG,
      borderRadius: 12,
      width: '100%',
      flexDirection: 'row',
    },
    input: {
      width: '100%',
      color: COLORS.BG,
      fontSize: 18,
    },
    icon: {
      marginRight: 10,
    },
    errorMessage: {
      color: COLORS.RED,
    },
  });

export default styles;
