import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      paddingHorizontal: 20,
      paddingTop: 10,
      flex: 1,
    },
    container: {
      paddingVertical: 20,
      flex: 1,
    },
    update: {
      paddingBottom: 20,
      color: theme.TEXT_PRIMARY,
      fontSize: 12,
    },
  });

export default styles;
