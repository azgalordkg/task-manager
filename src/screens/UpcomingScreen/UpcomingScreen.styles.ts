import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      paddingHorizontal: 20,
      marginTop: 20,
      // backgroundColor: 'white',
    },
    headerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    todayText: {
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 22,
      color: theme.TEXT_ACCENT_COLOR,
    },
    selectContainer: {
      flexDirection: 'row',
      columnGap: 6,
      alignItems: 'center',
    },
    selectDateText: {
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 22,
      color: theme.TEXT_PRIMARY,
    },

    datePickerHeader: {
      display: 'none',
    },
    datePickerTodayTextStyle: {
      color: theme.TEXT_ACCENT_COLOR,
    },
    datePickerTextStyle: {
      color: theme.TEXT_PRIMARY,
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 17,
    },
    datePickerSelectedDayTextStyle: {
      // color: theme.TEXT_PRIMARY,
    },
    datePickerSelectedDayStyle: {
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.TEXT_ACCENT_COLOR,
    },
  });

export default styles;
