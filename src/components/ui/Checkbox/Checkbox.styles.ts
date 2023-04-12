import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    text: {
      marginLeft: 10,
      color: theme.TEXT_PRIMARY,
      fontSize: 16,
    },
  });

export default styles;
