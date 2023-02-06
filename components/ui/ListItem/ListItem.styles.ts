import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  buttonsContainer: {
    width: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingVertical: 20,
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 1,
    backgroundColor: COLORS.BG,
  },
  textWrapper: {},
  checkmarkWrapper: {
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.WHITE,
  },
  timeWrapper: {
    marginBottom: 10,
  },
  time: {
    color: COLORS.GREY,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  buttonsWrapper: {
    backgroundColor: COLORS.RED,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
