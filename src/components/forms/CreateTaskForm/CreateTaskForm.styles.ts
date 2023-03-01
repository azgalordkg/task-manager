import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
  },
  dateTitle: {
    fontSize: 18,
    color: COLORS.BG,
    marginBottom: 10,
    fontWeight: '500',
  },
  timeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    marginBottom: 40,
  },
});

export default styles;
