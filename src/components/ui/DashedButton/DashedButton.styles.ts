import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (
  height: number,
  fontSize: number,
  color?: string,
  disabled?: boolean,
) =>
  StyleSheet.create({
    button: {
      opacity: disabled ? 0.5 : 1,
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
