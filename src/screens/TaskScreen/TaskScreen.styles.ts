import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  taskWrapper: {
    backgroundColor: COLORS.BG,
    height: '100%',
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
    height: 168,
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
    color: '#fff',
    fontSize: 20,
    lineHeight: 33,
  },
  taskDateContainer: {
    flexDirection: 'column',
    rowGap: 8,
    alignItems: 'flex-end',
  },
  taskDateDay: {
    fontSize: 28,
    color: COLORS.WHITE,
  },
  taskMonthWeekContainer: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center',
  },
  taskDateMonth: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: '500',
  },
  taskDateWeekday: {
    fontSize: 14,
    color: COLORS.WHITE,
  },
  taskDatePeriod: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.WHITE,
  },
  taskDescription: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 28,
    marginTop: 30,
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
