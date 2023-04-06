import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    rowGap: 20,
    flex: 0,
  },
  textContainer: {
    alignItems: 'center',
    rowGap: 8,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.GREY_LIGHT,
  },
  link: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.GREEN,
  },
});

export default styles;
