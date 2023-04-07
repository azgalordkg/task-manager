import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    header: {
      paddingHorizontal: 16,
      paddingBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: COLORS.GREEN,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 20,
    },
    screenTitle: {
      color: theme.TEXT_PRIMARY,
      fontSize: 18,
      fontWeight: '500',
    },
  });

export default styles;
