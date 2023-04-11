import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  inputsWrapper: {
    rowGap: 6,
    marginBottom: 40,
  },
  dateTitle: {
    fontSize: 18,
    color: COLORS.BLACK_DARK,
    marginBottom: 10,
    fontWeight: '500',
  },
  dateWrapper: {
    rowGap: 12,
  },
});

export default styles;
