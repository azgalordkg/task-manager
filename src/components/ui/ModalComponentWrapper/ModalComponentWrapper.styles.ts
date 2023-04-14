import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      paddingBottom: 60,
      paddingTop: 18,
      paddingHorizontal: 20,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      backgroundColor: theme.BACKGROUND.SECONDARY,
    },
  });

export default styles;
