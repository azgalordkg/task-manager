import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.GREY,
    paddingVertical: 20,
  },
  title: {
    flexGrow: 1,
    maxWidth: '95%',
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
