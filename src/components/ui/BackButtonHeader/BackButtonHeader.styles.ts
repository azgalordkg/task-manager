import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      height: 38,
      paddingBottom: 8,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLORS.GREEN,
    },
    button: {
      marginRight: 20,
      padding: 4,
    },
    text: {
      color: theme.TEXT_PRIMARY,
      fontSize: 22,
      fontWeight: '500',
    },
  });

export default styles;
