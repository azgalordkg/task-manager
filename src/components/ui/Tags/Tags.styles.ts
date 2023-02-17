import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (bgColor: string) =>
  StyleSheet.create({
    tabsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 8,
      backgroundColor: bgColor,
      borderRadius: 6,
    },
    tabsTitle: {
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 15,
      color: COLORS.WHITE,
    },
  });

export default styles;
