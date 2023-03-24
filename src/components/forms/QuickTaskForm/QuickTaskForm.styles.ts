import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      height: 126,
    },
    container: {
      padding: 12,
      borderRadius: 12,
      backgroundColor: theme.BACKGROUND_TASK,
      flexDirection: 'row',
      columnGap: 14,
    },
    inputContainer: {
      width: '84%',
    },
    buttonWrapper: {
      flexDirection: 'row',
      columnGap: 12,
      marginTop: 14,
    },
  });

export default styles;
