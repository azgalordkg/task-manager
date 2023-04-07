import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    contentWrapper: {
      paddingBottom: 100,
      rowGap: 6,
      flex: 1,
    },
    buttonWrapper: {
      backgroundColor: theme.BUTTONS_PRIMARY,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    dayTitle: {
      marginHorizontal: 20,
      marginTop: 30,
      marginBottom: 20,
      fontWeight: '600',
      fontSize: 14,
      color: theme.TEXT_PRIMARY,
    },
  });

export default styles;
