import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    height: 38,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GREEN,
  },
});

export default styles;
