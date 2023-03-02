import { Animated, StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

export interface StyleProps {
  scale?: Animated.AnimatedInterpolation<string>;
  isLast?: boolean;
  checked?: boolean;
}

const styles = ({ scale, isLast, checked }: StyleProps) =>
  StyleSheet.create({
    buttonsContainer: {
      width: 70,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      ...(isLast ? { transform: [{ scale: scale as unknown as number }] } : {}),
    },
    outerContainer: {
      marginBottom: 14,
      marginHorizontal: 20,
    },
    container: {
      padding: 12,
      borderRadius: 12,
      borderBottomColor: COLORS.LIGHT_GREY,
      backgroundColor: COLORS.WHITE_BG,
    },
    textWrapper: {
      width: '80%',
    },
    checkmarkWrapper: {
      marginRight: 15,
    },
    title: {
      marginBottom: 8,
      fontSize: 22,
      fontWeight: '600',
      color: COLORS.WHITE,
    },
    time: {
      color: COLORS.GREY,
    },
    contentWrapper: {
      flexDirection: 'row',
    },
    buttonsWrapper: {
      backgroundColor: COLORS.RED,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentButton: {
      width: '50%',
    },
    crossedTextStyles: {
      textDecorationLine: checked ? 'line-through' : 'none',
    },
    deleteBtn: {
      borderRadius: 10,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.LIGHT_GREY,
    },
    outsideBackground: {
      backgroundColor: COLORS.WHITE_BG,
      position: 'absolute',
      height: '100%',
      width: '70%',
      left: 70,
      zIndex: -1,
    },
    deleteBtnWrapper: {
      position: 'absolute',
      right: 2,
      top: 2,
      padding: 10,
    },
    tagsWrapper: {
      flexDirection: 'row',
      columnGap: 6,
      marginBottom: 8,
    },
    tag: {
      height: 6,
      width: 16,
      borderRadius: 3,
    },
  });

export default styles;
