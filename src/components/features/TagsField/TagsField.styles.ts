import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    color: COLORS.BG,
  },
  tagsWrapper: {
    flexDirection: 'row',
    columnGap: 10,
  },
});

export default styles;
