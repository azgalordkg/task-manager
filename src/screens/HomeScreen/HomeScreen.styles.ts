import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingTop: 30,
  },
  buttonWrapper: {
    backgroundColor: COLORS.BLUE,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
});

export default styles;
