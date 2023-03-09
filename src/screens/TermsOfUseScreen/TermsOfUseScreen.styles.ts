import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flex: 1,
  },
  container: {
    paddingVertical: 20,
    flex: 1,
  },
  icon: {
    color: COLORS.WHITE,
    fontSize: 22,
    lineHeight: 20,
    fontWeight: '600',
  },
  update: {
    color: COLORS.WHITE,
    fontSize: 12,
  },
});

export default styles;
