import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  contentContainer: {
    marginTop: 40,
    rowGap: 20,
  },
  screenTitle: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.WHITE,
  },
  screenDescription: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 26,
    color: COLORS.WHITE,
  },
  footerContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
