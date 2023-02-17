import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  text: {
    flexGrow: 1,
    color: COLORS.WHITE,
    fontSize: 18,
  },
});

export default styles;
