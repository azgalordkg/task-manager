import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 8,
  },
  input: {
    width: '100%',
    color: COLORS.BG,
    fontSize: 18,
  },
  errorMessage: {
    color: COLORS.RED,
  },
});
export default styles;
