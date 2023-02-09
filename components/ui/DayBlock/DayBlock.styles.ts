import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  dateWrapper: {
    marginLeft: -20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todayWrapper: {
    width: 60,
    borderRadius: 8,
    marginLeft: 'auto',
    backgroundColor: COLORS.ORANGE,
  },
  dayWrapper: {
    height: 30,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 8,
    marginRight: 12,
  },
  day: {
    fontSize: 22,
    fontWeight: '600',
  },
  today: {
    fontSize: 16,
    fontWeight: '600',
  },
  monthWrapper: {
    flexDirection: 'row',
  },
  month: {
    color: COLORS.WHITE,
    fontWeight: '700',
    fontSize: 18,
  },
  dayOfWeek: {
    color: COLORS.WHITE,
    fontSize: 18,
  },
});

export default styles;
