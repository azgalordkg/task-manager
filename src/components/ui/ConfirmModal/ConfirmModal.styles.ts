import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  modalWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 10,
  },
  modalTitle: {
    color: COLORS.BG,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 12,
  },
  modalDescription: {
    color: COLORS.BG,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 18,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    columnGap: 8,
  },
});

export default styles;
