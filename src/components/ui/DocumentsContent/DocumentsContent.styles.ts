import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    content: {
      color: theme.TEXT_PRIMARY,
    },
  });

export default styles;
