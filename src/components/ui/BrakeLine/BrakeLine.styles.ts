import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  brakeLine: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.LIGHT_GREY,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  brakeLineChild: {
    width: '75%',
    height: 2,
    backgroundColor: COLORS.WHITE,
  },
});

export default styles;
