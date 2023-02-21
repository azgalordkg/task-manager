import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 40,
  },
  closerWrapper: {
    paddingVertical: 15,
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  closer: {
    height: 5,
    width: 65,
    backgroundColor: COLORS.GREY,
    borderRadius: 3,
  },
  footer: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
