import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: theme.BACKGROUND_PRIMARY,
      height: '100%',
    },
    mainWrapper: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: theme.BACKGROUND_PRIMARY,
    },
  });

export default styles;
