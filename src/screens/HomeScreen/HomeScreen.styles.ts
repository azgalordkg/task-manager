import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      paddingTop: 30,
      paddingBottom: 50,
      flex: 1,
    },
    buttonWrapper: {
      backgroundColor: theme.BUTTONS_ACCENT,
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 20,
      right: 15,
    },
  });

export default styles;
