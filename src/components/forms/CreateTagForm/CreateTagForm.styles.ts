import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  colorTitle: {
    color: COLORS.BG,
    fontSize: 16,
    marginBottom: 18,
  },
  colorContainer: {
    paddingVertical: 30,
  },
  colorList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 18,
    columnGap: 10,
  },
});

export default styles;
