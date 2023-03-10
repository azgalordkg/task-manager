import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (containerWidth: number, isActive?: boolean) =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: isActive ? COLORS.BLUE : 'transparent',
      width: containerWidth,
      alignItems: 'center',
      rowGap: 4,
      paddingVertical: 20,
      paddingHorizontal: 2,
      borderRadius: 10,
    },
    duration: {
      color: COLORS.BG,
      fontSize: 12,
      textAlign: 'center',
    },
    price: {
      color: COLORS.BG,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    description: {
      color: COLORS.BG,
      fontSize: 12,
      textAlign: 'center',
    },
    saveWrapper: {
      backgroundColor: COLORS.RED,
      borderRadius: 4,
      paddingVertical: 2,
      paddingHorizontal: 6,
      position: 'absolute',
      top: -6,
      left: '50%',
      transform: [{ translateX: -23 }],
    },
    save: {
      color: COLORS.WHITE,
      fontWeight: '600',
      fontSize: 8,
    },
  });

export default styles;
