import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  taskWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  taskHeaderContainer: {
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  taskTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  taskTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 33,
  },
  taskImageContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: COLORS.WHITE,
    position: 'relative',
    marginBottom: 32,
  },
  taskImageDateContainer: {
    position: 'absolute',
    right: 0,
    paddingVertical: 15,
    paddingRight: 15,
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  taskImageDateText: {
    fontSize: 28,
    color: COLORS.BG,
  },
  taskDateContainer: {
    flexDirection: 'column',
    rowGap: 6,
    alignItems: 'flex-end',
  },
  taskDateDay: {
    fontSize: 28,
    color: COLORS.BG,
  },
  taskDateMonth: {
    fontSize: 20,
    color: COLORS.BG,
    fontWeight: '500',
  },
  taskDateWeekday: {
    fontSize: 18,
    color: COLORS.BG,
  },
  taskDatePeriod: {
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: '#1F1F1F',
    color: COLORS.WHITE,
    borderRadius: 5,
    overflow: 'hidden',
  },
  taskDescription: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  taskButtonContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    columnGap: 12,
    flexGrow: 1,
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 12,
  },
});

export default styles;
