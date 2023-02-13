import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (isDark?: boolean) =>
  StyleSheet.create({
    brakeLine: {
      width: '100%',
      height: 2,
      backgroundColor: isDark ? COLORS.GREY : COLORS.LIGHT_GREY,
      marginBottom: 15,
      alignItems: 'flex-end',
    },
    brakeLineChild: {
      width: '75%',
      height: 2,
      backgroundColor: isDark ? COLORS.BG : COLORS.WHITE,
    },
  });

export default styles;
