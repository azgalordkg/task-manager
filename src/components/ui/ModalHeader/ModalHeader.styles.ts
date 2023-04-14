import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    closerWrapper: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    closer: {
      height: 3,
      width: 35,
      backgroundColor: theme.ICONS.SECONDARY,
      borderRadius: 3,
    },
    header: {
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
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'center',
      fontSize: 16,
    },
  });

export default styles;
