import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: 16,
      flex: 1,
      flexGrow: 1,
    },
    textContainer: {
      alignItems: 'center',
      rowGap: 8,
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 19,
      color: theme.TEXT.PRIMARY,
    },
    link: {
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 19,
      color: theme.BUTTONS.PRIMARY,
    },
  });

export default styles;
