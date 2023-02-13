import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG,
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  closeBtn: {
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  menuItemWrapper: {
    marginBottom: 30,
  },
});

export default styles;
