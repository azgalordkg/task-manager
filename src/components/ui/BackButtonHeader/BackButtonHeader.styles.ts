import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: 20,
    padding: 4,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontWeight: '500',
  },
});

export default styles;
