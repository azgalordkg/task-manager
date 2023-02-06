import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BG,
    paddingBottom: 10,
    width: '100%',
  },
  input: {
    color: COLORS.BG,
    fontSize: 18,
  },
});

export default styles;
