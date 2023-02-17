import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.BG : COLORS.BG,
    },
  });

export default styles;
