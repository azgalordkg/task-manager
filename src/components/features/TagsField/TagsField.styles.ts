import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      height: 28,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    label: {
      paddingVertical: 3,
      marginRight: 10,
      fontSize: 16,
      color: theme.TEXT_PRIMARY,
    },
    tagsWrapper: {
      flexDirection: 'row',
      columnGap: 10,
      rowGap: 10,
      flexWrap: 'wrap',
      flex: 1,
    },
  });

export default styles;
