import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      marginTop: 20,
    },
    yearTitle: {
      fontSize: 14,
      lineHeight: 16,
      color: theme.TEXT.PRIMARY,
    },
    monthContainer: {
      marginTop: 12,
      flexWrap: 'wrap',
      flexDirection: 'row',
      rowGap: 12,
      columnGap: 10,
    },
    monthItem: {
      height: 32,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: COLORS.GREY,
    },
    monthText: {
      fontSize: 12,
      lineHeight: 14,
      color: theme.TEXT.PRIMARY,
    },
    selectedMonthItem: {
      backgroundColor: theme.BUTTONS.PRIMARY,
    },
    todayMonthText: {
      color: theme.TEXT.ACCENT,
    },
    disabledMonthText: {
      color: theme.TEXT.SECONDARY,
    },
  });

export default styles;
