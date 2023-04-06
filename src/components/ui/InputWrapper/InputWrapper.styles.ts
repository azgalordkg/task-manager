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
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: backgroundColor,
      borderRadius: 12,
      width: '100%',
      flexDirection: 'row',
      height: 40,
    },
    icon: {
      marginRight: 8,
    },
  });

export default styles;
