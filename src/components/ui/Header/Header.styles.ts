import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    header: {
      paddingHorizontal: 16,
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.BACKGROUND.PRIMARY,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16,
    },
    screenTitle: {
      color: theme.TEXT.PRIMARY,
      fontSize: 18,
      fontWeight: '500',
    },
  });

export default styles;
