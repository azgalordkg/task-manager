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
  button: {
    backgroundColor: COLORS.RED,
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 22,
  },
});

export default styles;
