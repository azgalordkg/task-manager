import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      paddingHorizontal: 20,
      flex: 1,
    },
    contentContainer: {
      marginTop: 30,
      rowGap: 20,
      flex: 1,
    },
    screenTitle: {
      fontWeight: '600',
      fontSize: 24,
      lineHeight: 28,
      color: theme.TEXT_PRIMARY,
    },
    screenDescription: {
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 26,
      color: theme.TEXT_PRIMARY,
    },
    footerContainer: {
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
  });

export default styles;
