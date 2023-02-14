import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (isDark?: boolean, marginBottom?: number) =>
  StyleSheet.create({
    brakeLine: {
      width: '100%',
      height: 2,
      backgroundColor: isDark ? COLORS.GREY : COLORS.LIGHT_GREY,
      marginBottom: marginBottom || 15,
      alignItems: 'flex-end',
    },
    brakeLineChild: {
      width: '75%',
      height: 2,
      backgroundColor: isDark ? COLORS.BG : COLORS.WHITE,
    },
  });

export default styles;
