import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (
  theme: SchemeType,
  responsiveHeight?: boolean,
  contentBackgroundColor?: string,
) =>
  StyleSheet.create({
    rightAction: {
      zIndex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    contentWrapper: {
      backgroundColor: contentBackgroundColor,
      flex: 1,
      paddingHorizontal: 20,
    },
    mainWrapper: {
      flex: responsiveHeight ? 0 : 1,
      backgroundColor: theme.BACKGROUND.SECONDARY,
      paddingTop: 15,
      paddingBottom: 37,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    closerWrapper: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 18,
    },
    closer: {
      height: 3,
      width: 35,
      backgroundColor: theme.ICONS.SECONDARY,
      borderRadius: 3,
    },
    header: {
      paddingBottom: contentBackgroundColor ? 18 : 0,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      width: '100%',
      color: theme.TEXT.PRIMARY,
      fontWeight: '600',
      zIndex: -1,
      position: 'absolute',
      top: 0,
      left: 20,
      right: 0,
      bottom: 0,
      textAlign: 'center',
      fontSize: 16,
    },
  });

export default styles;
