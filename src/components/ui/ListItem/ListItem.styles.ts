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
    container: {
      paddingVertical: 20,
      borderBottomColor: COLORS.LIGHT_GREY,
      borderBottomWidth: isLast ? 0 : 1,
      backgroundColor: COLORS.BG,
    },
    textWrapper: {
      width: '100%',
    },
    checkmarkWrapper: {
      marginRight: 15,
    },
    title: {
      fontSize: 22,
      fontWeight: '600',
      color: COLORS.WHITE,
    },
    timeWrapper: {
      marginBottom: 10,
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
  });

export default styles;
