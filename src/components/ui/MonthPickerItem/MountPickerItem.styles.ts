import { Dimensions, StyleSheet } from 'react-native';

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
      justifyContent: 'space-between',
      rowGap: 10,
      columnGap: 10,
    },
    monthItem: {
      height: 34,
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width / 4 - 20,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme.BORDERS.PRIMARY,
    },
    monthText: {
      fontSize: 14,
      color: theme.TEXT.PRIMARY,
    },
    selectedMonthItem: {
      backgroundColor: theme.BUTTONS.PRIMARY,
      borderColor: theme.BUTTONS.PRIMARY,
    },
    todayMonthText: {
      color: theme.TEXT.ACCENT,
    },
    disabledMonthText: {
      color: theme.TEXT.SECONDARY,
    },
  });

export default styles;
