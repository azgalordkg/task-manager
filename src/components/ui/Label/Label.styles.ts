import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { addAlpha } from '@/utils';

const styles = (bgColor: string) =>
  StyleSheet.create({
    whiteWrapper: {
      backgroundColor: COLORS.WHITE,
      borderRadius: 6,
    },
    tabsContainer: {
      height: 27,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 10,
      backgroundColor: addAlpha(bgColor, 0.65),
      borderRadius: 6,
    },
    tabsTitle: {
      fontWeight: '600',
      fontSize: 12,
      color: COLORS.BLACK_DARK,
    },
    close: {
      marginLeft: 4,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: COLORS.BLACK_DARK,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
