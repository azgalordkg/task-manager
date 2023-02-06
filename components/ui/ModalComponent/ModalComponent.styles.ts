import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  closeArea: {
    height: '15%',
    width: '100%',
  },
  wrapper: {
    padding: 20,
    backgroundColor: COLORS.WHITE,
    height: '85%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
