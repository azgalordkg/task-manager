import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    mainWrapper: {
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      borderBottomLeftRadius: 14,
      borderBottomRightRadius: 14,
      position: 'absolute',
      top: 35,
      right: 0,
      backgroundColor: theme.BACKGROUND.NEUTRAL,
      width: 300,
      height: 'auto',
      zIndex: 1000,
    },
    controlElementButton: {
      width: '100%',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: theme.BORDERS.PRIMARY,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    controlElementDelete: {
      borderBottomWidth: 0,
    },
    controlElementText: {
      color: theme.TEXT.PRIMARY,
      fontSize: 16,
    },
    controlElementIcon: {
      width: 20,
      alignItems: 'center',
    },
  });

export default styles;
