import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (showClearIcon?: boolean, color?: string, multiline?: boolean) =>
  StyleSheet.create({
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 8,
      width: '100%',
    },
    input: {
      paddingVertical: 0,
      paddingRight: 30,
      width: showClearIcon ? '82%' : '100%',
      color: color,
      minHeight: multiline ? '50%' : 'auto',
      ...(multiline ? { lineHeight: 18 } : {}),
      fontSize: 18,
    },
    errorMessage: {
      color: COLORS.RED,
    },
  });
export default styles;
