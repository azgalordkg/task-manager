import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (active: boolean, color: string, theme: SchemeType) =>
  StyleSheet.create({
    outer: {
      borderWidth: 2,
      borderColor: active ? theme.TEXT_PRIMARY : color,
      backgroundColor: active ? 'transparent' : color,
      width: 60,
      height: 32,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inner: {
      backgroundColor: color,
      width: 52,
      height: 24,
      borderRadius: 3,
    },
  });

export default styles;
