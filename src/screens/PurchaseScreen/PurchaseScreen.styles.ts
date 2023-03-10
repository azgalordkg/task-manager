import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.BG,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: COLORS.BG,
    marginBottom: 20,
  },
  cancel: {
    color: COLORS.PLACEHOLDER,
    fontSize: 14,
  },
  description: {
    marginTop: 'auto',
    marginBottom: 30,
    color: COLORS.BG,
    fontSize: 12,
    lineHeight: 21,
  },
  planWrapper: {
    backgroundColor: COLORS.INPUT_BG,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
});

export default styles;
