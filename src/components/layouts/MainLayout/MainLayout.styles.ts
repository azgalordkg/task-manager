import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    topView: {
      flex: 0,
      backgroundColor: COLORS.GREEN,
    },
    backgroundStyle: {
      flex: 1,
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
