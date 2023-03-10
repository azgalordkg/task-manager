import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: COLORS.GREY_MEDIUM,
    borderStyle: 'dashed',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: COLORS.WHITE_DARK,
    fontSize: 16,
  },
});

export default styles;
