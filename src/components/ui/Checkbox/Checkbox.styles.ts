import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  text: {
    marginLeft: 10,
    color: COLORS.BG,
    fontSize: 16,
  },
});

export default styles;
