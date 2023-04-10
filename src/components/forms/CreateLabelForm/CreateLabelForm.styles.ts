import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    colorTitle: {
      color: theme.TEXT_PRIMARY,
      fontSize: 16,
      marginBottom: 19,
    },
    colorContainer: {
      paddingVertical: 30,
    },
    colorList: {
      // justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: 18,
      columnGap: 21,
    },
  });

export default styles;
