import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (height: number, fontSize: number) =>
  StyleSheet.create({
    button: {
      height,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: COLORS.LIGHT_GREEN,
      borderRadius: 6,
      borderStyle: 'dashed',
    },
    text: {
      fontSize,
      fontWeight: '700',
      color: COLORS.LIGHT_GREY,
    },
    icon: {
      marginRight: 10,
    },
  });

export default styles;
