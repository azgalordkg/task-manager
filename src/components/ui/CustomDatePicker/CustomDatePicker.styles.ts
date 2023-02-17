import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (inputWidth?: string | number) =>
  StyleSheet.create({
    container: {
      width: inputWidth || 'auto',
      paddingTop: 12,
      borderRadius: 12,
      backgroundColor: COLORS.INPUT_BG,
    },
    button: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
    },
    label: {
      paddingHorizontal: 12,
      marginBottom: -4,
      fontSize: 18,
      color: COLORS.PLACEHOLDER,
    },
  });

export default styles;
