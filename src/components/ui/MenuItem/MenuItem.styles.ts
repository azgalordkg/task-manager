import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  text: {
    flexGrow: 1,
    color: COLORS.WHITE,
    fontSize: 18,
  },
});

export default styles;
