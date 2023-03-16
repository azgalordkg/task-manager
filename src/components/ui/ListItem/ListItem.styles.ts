import { Animated, StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

export interface StyleProps {
  scale?: Animated.AnimatedInterpolation<string>;
  isLast?: boolean;
  checked?: boolean;
  theme: SchemeType;
}

const styles = ({ scale, isLast, checked, theme }: StyleProps) =>
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
      borderBottomColor: COLORS.GREY,
      backgroundColor: theme.BACKGROUND_TASK,
    },
    textWrapper: {
      width: '80%',
      justifyContent: 'center',
    },
    checkmarkWrapper: {
      marginRight: 15,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.TEXT_PRIMARY,
    },
    time: {
      marginTop: 6,
      fontSize: 14,
      color: theme.TEXT_SECONDARY,
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
      backgroundColor: COLORS.GREY,
    },
    outsideBackground: {
      backgroundColor: theme.BACKGROUND_TASK,
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
