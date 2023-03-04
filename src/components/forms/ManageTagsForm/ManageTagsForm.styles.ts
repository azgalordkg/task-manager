import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsWrapper: {
    paddingVertical: 8,
    width: '100%',
    flexGrow: 1,
  },
  message: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    color: COLORS.PLACEHOLDER,
  },
});

export default styles;
