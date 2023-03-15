import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentContainer: {
      backgroundColor: theme.BACKGROUND_SECONDARY,
    },
    buttonContainer: {
      backgroundColor: theme.BACKGROUND_SECONDARY,
      paddingHorizontal: 20,
      paddingBottom: 14,
    },
  });

export default styles;
