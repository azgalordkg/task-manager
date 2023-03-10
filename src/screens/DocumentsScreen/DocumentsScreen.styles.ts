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
  update: {
    paddingBottom: 20,
    color: COLORS.WHITE_LIGHT,
    fontSize: 12,
  },
});

export default styles;
