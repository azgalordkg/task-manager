import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (
  errorMessage?: string,
  borderColor?: string,
  backgroundColor?: string,
) =>
  StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      borderColor: errorMessage ? COLORS.RED : borderColor,
      padding: 11,
      backgroundColor: backgroundColor,
      borderRadius: 12,
      width: '100%',
      flexDirection: 'row',
    },
    icon: {
      marginRight: 10,
    },
  });

export default styles;
