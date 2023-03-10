import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: COLORS.GREY_DARK,
    flexDirection: 'row',
    columnGap: 14,
  },
  inputContainer: {
    width: '84%',
  },
  buttonWrapper: {
    flexDirection: 'row',
    columnGap: 12,
    marginTop: 14,
  },
});

export default styles;
