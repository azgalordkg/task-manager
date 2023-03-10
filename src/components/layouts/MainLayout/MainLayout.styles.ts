import { StyleSheet } from 'react-native';

import { schemeType } from '@/types/scheme';

const styles = (colorScheme: schemeType) =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: colorScheme.BLACK_DARK,
      height: '100%',
    },
    mainWrapper: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: colorScheme.BLACK_DARK,
    },
  });

export default styles;
