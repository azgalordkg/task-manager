import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    backButton: {
      padding: 4,
    },
    taskContentWrapper: {
      marginHorizontal: 20,
      marginTop: 30,
    },
    taskTitleWrapper: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    taskHeaderImage: {
      height: 127,
      alignItems: 'center',
      justifyContent: 'center',
    },
    taskHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    taskTitleTagsContainer: {
      rowGap: 20,
    },
    taskTagsContainer: {
      flexDirection: 'row',
      columnGap: 10,
    },
    taskTitle: {
      color: theme.TEXT_PRIMARY,
      fontSize: 24,
      fontWeight: '600',
    },
    taskDateContainer: {
      flexDirection: 'column',
      rowGap: 8,
      alignItems: 'flex-end',
    },
    taskDateDay: {
      fontSize: 28,
      color: theme.TEXT_PRIMARY,
    },
    taskMonthWeekContainer: {
      flexDirection: 'row',
      columnGap: 6,
      alignItems: 'center',
    },
    taskDateMonth: {
      fontSize: 16,
      color: theme.TEXT_PRIMARY,
      fontWeight: '600',
    },
    taskDateWeekday: {
      fontSize: 14,
      color: theme.TEXT_PRIMARY,
    },
    taskDatePeriod: {
      fontSize: 12,
      color: theme.TEXT_PRIMARY,
    },
    descriptionWrapper: {
      marginTop: 30,
    },
    taskDescription: {
      color: theme.TEXT_PRIMARY,
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 28,
    },
    taskButtonContainer: {
      marginBottom: 32,
      rowGap: 12,
      flexGrow: 1,
      justifyContent: 'flex-end',
      marginHorizontal: 20,
      marginTop: 12,
    },
  });

export default styles;
