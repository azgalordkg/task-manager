import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.GREY_LIGHT,
  },
});

export default styles;
