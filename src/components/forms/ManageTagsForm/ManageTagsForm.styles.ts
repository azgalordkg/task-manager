import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  itemsWrapper: {
    paddingVertical: 8,
    width: '100%',
  },
  message: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    color: COLORS.PLACEHOLDER,
  },
});

export default styles;
