import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (bgColor: string) =>
  StyleSheet.create({
    tabsContainer: {
      height: 32,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      paddingHorizontal: 12,
      backgroundColor: bgColor,
      borderRadius: 6,
    },
    tabsTitle: {
      fontWeight: '600',
      fontSize: 12,
      color: COLORS.BG,
    },
    close: {
      marginLeft: 4,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: COLORS.BG,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
