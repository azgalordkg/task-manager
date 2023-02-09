import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainWrapper: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  buttonWrapper: {
    backgroundColor: COLORS.BLUE,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
});

export default styles;
