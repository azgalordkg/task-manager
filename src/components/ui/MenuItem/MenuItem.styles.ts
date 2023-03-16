import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
    },
    text: {
      flexGrow: 1,
      color: theme.TEXT_PRIMARY,
      fontSize: 18,
    },
  });

export default styles;
