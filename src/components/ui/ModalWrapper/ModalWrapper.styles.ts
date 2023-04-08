import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType, responsiveHeight?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    contentWrapper: {
      flex: responsiveHeight ? 0 : 1,
      backgroundColor: theme.BACKGROUND_PRIMARY,
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 37,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    closerWrapper: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    closer: {
      height: 5,
      width: 65,
      backgroundColor: COLORS.GREY_LIGHT,
      borderRadius: 3,
    },
    footer: {
      paddingVertical: 15,
      width: '100%',
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
    },
    title: {
      width: '100%',
      color: theme.TEXT_PRIMARY,
      zIndex: -1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'center',
      fontSize: 16,
    },
  });

export default styles;
