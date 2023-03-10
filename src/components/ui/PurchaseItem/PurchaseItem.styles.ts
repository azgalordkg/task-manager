import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (containerWidth: number) =>
  StyleSheet.create({
    container: {
      width: containerWidth,
      alignItems: 'center',
      rowGap: 10,
    },
    iconWrapper: {
      width: 30,
      height: 30,
      backgroundColor: COLORS.WHITE_MEDIUM,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      width: '85%',
      textAlign: 'center',
      fontSize: 12,
      color: COLORS.BLACK_DARK,
    },
  });

export default styles;
