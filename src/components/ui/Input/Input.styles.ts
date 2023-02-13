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
      borderBottomWidth: 1,
      borderBottomColor: errorMessage ? COLORS.RED : COLORS.BG,
      paddingBottom: 10,
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
