import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      marginRight: 20,
      padding: 4,
    },
    text: {
      color: theme.TEXT_PRIMARY,
      fontSize: 28,
      fontWeight: '500',
    },
  });

export default styles;
