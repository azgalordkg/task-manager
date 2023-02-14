import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.BG,
  },
  contentWrapper: {
    flexGrow: 1,
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
    marginBottom: 40,
  },
  menuItemWrapper: {
    marginBottom: 30,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default styles;
