import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
  },
  titleWrapper: {
    marginBottom: 30,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 24,
  },
  fieldsWrapper: {
    paddingTop: 30,
    flex: 1,
    width: '100%',
  },
});

export default styles;
