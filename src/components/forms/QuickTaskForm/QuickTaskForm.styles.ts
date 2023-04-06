import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      height: 126,
    },
    container: {
      padding: 8,
      borderRadius: 12,
      backgroundColor: theme.BACKGROUND_TASK,
      flexDirection: 'row',
      columnGap: 14,
    },
    inputContainer: {
      width: '100%',
    },
    buttonWrapper: {
      flexDirection: 'row',
      columnGap: 12,
      marginTop: 8,
    },
  });

export default styles;
