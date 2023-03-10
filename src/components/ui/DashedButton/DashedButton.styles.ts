import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (height: number, fontSize: number, color?: string) =>
  StyleSheet.create({
    button: {
      height,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: COLORS.GREEN,
      borderRadius: 6,
      borderStyle: 'dashed',
    },
    text: {
      fontSize,
      fontWeight: '700',
      color,
    },
    icon: {
      marginRight: 10,
    },
  });

export default styles;
