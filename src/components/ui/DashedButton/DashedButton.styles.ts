import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  button: {
    height: 28,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREEN,
    borderRadius: 6,
    borderStyle: 'dashed',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.LIGHT_GREY,
  },
});

export default styles;
