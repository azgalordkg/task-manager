import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    input: {
      fontSize: 16,
      color: theme.TEXT.PRIMARY,
      marginRight: 4,
    },
    label: {
      fontSize: 16,
      marginLeft: 8,
      color: COLORS.GREY_LIGHT,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default styles;
