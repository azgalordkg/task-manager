import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

interface StylesProps {
  isDark?: boolean;
  marginBottom?: number;
  color?: string;
}

const styles = ({ isDark, marginBottom, color }: StylesProps) =>
  StyleSheet.create({
    brakeLine: {
      width: '100%',
      height: 2,
      backgroundColor: color || (isDark ? COLORS.GREY : COLORS.LIGHT_GREY),
      marginBottom: marginBottom || 0,
      alignItems: 'flex-end',
    },
  });

export default styles;
