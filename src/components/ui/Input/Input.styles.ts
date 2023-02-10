import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BG,
    paddingBottom: 10,
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    width: '100%',
    color: COLORS.BG,
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
