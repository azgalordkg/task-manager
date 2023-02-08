import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
  },
  titleWrapper: {
    marginBottom: 20,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 24,
  },
  fieldsWrapper: {
    paddingTop: 40,
    flex: 1,
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 24,
  },
  dateButtonsWrapper: {
    flexDirection: 'row',
    paddingVertical: 20,
    width: '100%',
  },
  dateButtonContainer: {
    marginRight: 6,
  },
  dateTitle: {
    fontSize: 18,
    color: COLORS.BG,
    marginBottom: 10,
    fontWeight: '500',
  },
});

export default styles;
