import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType, isDoneDisabled?: boolean) =>
  StyleSheet.create({
    text: {
      color: theme.BUTTONS_PRIMARY,
      opacity: (isDoneDisabled && 0.3) || 1,
    },
    container: {
      padding: 4,
    },
  });

export default styles;
