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
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
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
    deleteButton: {
      paddingVertical: 3,
      paddingHorizontal: 4,
      position: 'absolute',
      right: 0,
      bottom: -3,
    },
  });

export default styles;
