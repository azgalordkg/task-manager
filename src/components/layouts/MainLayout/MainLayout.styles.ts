import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    topView: {
      flex: 0,
      backgroundColor: theme.BACKGROUND.PRIMARY,
    },
    backgroundStyle: {
      flex: 1,
      backgroundColor: theme.BACKGROUND.SECONDARY,
      height: '100%',
    },
    mainWrapper: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
    },
  });

export default styles;
