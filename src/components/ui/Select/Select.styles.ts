import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    color: COLORS.BG,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
    color: COLORS.PLACEHOLDER,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
