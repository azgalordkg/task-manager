import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = (color: string, isSettings?: boolean) =>
  StyleSheet.create({
    container: {
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: COLORS.WHITE_MEDIUM,
    },
    dot: {
      marginHorizontal: isSettings ? 0 : 16,
      marginRight: 16,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: color,
    },
    text: {
      color: isSettings ? COLORS.WHITE_LIGHT : COLORS.BLACK_DARK,
      fontSize: 18,
      flexGrow: 1,
    },
    edit: {
      padding: 6,
    },
  });

export default styles;
