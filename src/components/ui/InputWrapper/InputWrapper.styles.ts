import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (errorMessage?: string) =>
  StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      borderColor: errorMessage ? COLORS.RED : COLORS.INPUT_BG,
      padding: 11,
      backgroundColor: COLORS.INPUT_BG,
      borderRadius: 12,
      width: '100%',
      flexDirection: 'row',
    },
    icon: {
      marginRight: 10,
    },
  });

export default styles;
