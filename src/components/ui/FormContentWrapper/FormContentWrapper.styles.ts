import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      width: '100%',
      flex: 1,
      alignItems: 'flex-start',
    },
    titleWrapper: {
      marginBottom: 30,
      width: '100%',
      alignItems: 'center',
    },
    title: {
      color: theme.TEXT_PRIMARY,
      fontWeight: '600',
      fontSize: 22,
    },
    fieldsWrapper: {
      flex: 1,
      width: '100%',
    },
    deleteButton: {
      paddingVertical: 3,
      paddingHorizontal: 4,
      position: 'absolute',
      right: 0,
    },
  });

export default styles;
