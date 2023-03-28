import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType, isLimit?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    itemsWrapper: {
      paddingVertical: 8,
      width: '100%',
      flexGrow: 1,
    },
    message: {
      marginTop: 12,
      marginBottom: 4,
      fontSize: 16,
      color: COLORS.GREY_LIGHT,
    },
    total: {
      fontSize: 16,
      color: theme.TEXT_PRIMARY,
      marginBottom: 12,
    },
    totalCount: {
      fontWeight: isLimit ? '700' : '400',
      color: isLimit ? COLORS.GREEN : theme.TEXT_PRIMARY,
    },
  });

export default styles;
