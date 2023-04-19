import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      marginTop: 20,
    },
    headerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginHorizontal: 20,
    },
    todayText: {
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 22,
      color: theme.TEXT.ACCENT,
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
      color: theme.TEXT.PRIMARY,
    },

    weekdayContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    weekdayText: {
      fontSize: 14,
      lineHeight: 17,
      color: theme.TEXT.SECONDARY,
    },
    dayContainerStyle: {
      backgroundColor: 'transparent',
    },
    dayTextStyle: {
      color: theme.TEXT.PRIMARY,
      // width: 9,
      // maxWidth: 16,
    },
    todayTextStyle: {
      color: theme.TEXT.ACCENT,
    },
    nonTouchableDayTextStyle: {
      color: theme.TEXT.SECONDARY,
    },
    activeDayContainerStyle: {
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.TEXT.ACCENT,
    },
    activeDayTextStyle: {
      color: theme.TEXT.PRIMARY,
    },
    endDateContainerStyle: {
      borderBottomRightRadius: 4,
      borderTopRightRadius: 4,
    },
    startDateContainerStyle: {
      borderBottomLeftRadius: 4,
      borderTopLeftRadius: 4,
    },

    dayTitle: {
      marginHorizontal: 20,
      marginTop: 30,
      marginBottom: 20,
      fontWeight: '600',
      fontSize: 14,
      color: theme.TEXT.PRIMARY,
    },
    taskListWrapper: {
      paddingBottom: 100,
      rowGap: 6,
      flex: 1,
    },
    buttonWrapper: {
      backgroundColor: theme.BUTTONS.PRIMARY,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
  });

export default styles;
