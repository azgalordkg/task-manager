import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brakeLine: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.LIGHT_BREAK_LINE,
    alignItems: 'flex-end',
  },
  headerTitle: {
    marginLeft: 20,
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 33,
    color: COLORS.WHITE,
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
