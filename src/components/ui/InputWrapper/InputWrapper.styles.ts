import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (
  errorMessage?: string,
  borderColor?: string,
  backgroundColor?: string,
  multiline?: boolean,
) =>
  StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      borderColor: errorMessage ? COLORS.RED : borderColor,
      padding: 12,
      backgroundColor: backgroundColor,
      borderRadius: 12,
      width: '100%',
      flexDirection: 'row',
      alignItems: multiline ? 'flex-start' : 'center',
      minHeight: 48,
    },
    icon: {
      marginRight: 8,
    },
  });

export default styles;
