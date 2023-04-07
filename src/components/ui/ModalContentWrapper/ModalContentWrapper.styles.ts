import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
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
