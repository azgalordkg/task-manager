import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (color: string) =>
  StyleSheet.create({
    container: {
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: COLORS.INPUT_BG,
    },
    dot: {
      marginHorizontal: 16,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: color,
    },
    text: {
      color: COLORS.BG,
      fontSize: 18,
      flexGrow: 1,
    },
    edit: {
      padding: 6,
    },
  });

export default styles;
