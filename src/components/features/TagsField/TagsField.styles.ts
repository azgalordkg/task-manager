import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    height: 28,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  label: {
    paddingVertical: 3,
    marginRight: 10,
    fontSize: 16,
    color: COLORS.BG,
  },
  tagsWrapper: {
    flexDirection: 'row',
    columnGap: 10,
    rowGap: 10,
    flexWrap: 'wrap',
    flex: 1,
  },
});

export default styles;
