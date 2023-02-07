import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  modal: {
    paddingTop: 40,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 60,
  },
  closerWrapper: {
    paddingVertical: 15,
    marginTop: 50,
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  closer: {
    height: 5,
    width: 65,
    backgroundColor: COLORS.GREY,
    borderRadius: 3,
  },
  footer: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
  },
});

export default styles;
