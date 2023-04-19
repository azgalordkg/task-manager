import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    buttonWrapper: {
      backgroundColor: theme.BACKGROUND.ACCENT,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
  });

export default styles;
