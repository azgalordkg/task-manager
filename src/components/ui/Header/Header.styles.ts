import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';
import { addShadow } from '@/utils';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    header: {
      paddingHorizontal: 16,
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.BACKGROUND.PRIMARY,
      ...addShadow({
        shadowOpacity: 0.05,
        width: 1,
        height: 1,
        shadowRadius: 1,
        elevation: 1,
      }),
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16,
    },
    screenTitle: {
      color: theme.TEXT.PRIMARY,
      fontSize: 18,
      fontWeight: '500',
    },
  });

export default styles;
