import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    text: {
      color: theme.BUTTONS_PRIMARY,
    },
  });

export default styles;