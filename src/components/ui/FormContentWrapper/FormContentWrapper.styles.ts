import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      marginTop: 20,
      width: '100%',
      flex: 1,
      alignItems: 'flex-start',
    },
    title: {
      color: theme.TEXT_SECONDARY,
      fontWeight: '600',
      fontSize: 18,
    },
    fieldsWrapper: {
      flex: 1,
      width: '100%',
    },
  });

export default styles;
