import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      paddingBottom: 50,
      flex: 1,
    },
    buttonWrapper: {
      backgroundColor: theme.BUTTONS_PRIMARY,
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 20,
      right: 15,
    },
    dayTitle: {
      marginHorizontal: 20,
      marginTop: 30,
      marginBottom: 20,
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 17,
      color: theme.TEXT_PRIMARY,
    },
  });

export default styles;
