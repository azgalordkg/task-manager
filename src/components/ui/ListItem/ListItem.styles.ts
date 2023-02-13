import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 1,
    backgroundColor: COLORS.BG,
  },
  textWrapper: {
    width: '100%',
  },
  checkmarkWrapper: {
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.WHITE,
  },
  timeWrapper: {
    marginBottom: 10,
  },
  time: {
    color: COLORS.GREY,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  contentButton: {
    width: '50%',
  },
});

export default styles;
