import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType, inputWidth?: string | number) =>
  StyleSheet.create({
    container: {
      width: inputWidth || 'auto',
      borderRadius: 12,
      backgroundColor: theme.INPUT_DEFAULT,
    },
    button: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
    },
    label: {
      paddingHorizontal: 12,
      marginBottom: -4,
      fontSize: 16,
      color: COLORS.GREY_LIGHT,
    },
  });

export default styles;
