import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType, responsiveHeight?: boolean) =>
  StyleSheet.create({
    rightAction: {
      zIndex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    contentWrapper: {
      flex: responsiveHeight ? 0 : 1,
      backgroundColor: theme.BACKGROUND.SECONDARY,
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 37,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    footer: {
      paddingVertical: 15,
      width: '100%',
      alignItems: 'center',
    },
  });

export default styles;
