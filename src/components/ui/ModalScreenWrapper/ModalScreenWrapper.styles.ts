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
    footer: {
      paddingVertical: 15,
      width: '100%',
      alignItems: 'center',
    },
  });

export default styles;
