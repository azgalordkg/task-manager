import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    wrapper: {
      marginRight: 8,
      width: 60,
      height: 16,
      borderWidth: 2,
      borderColor: COLORS.WHITE,
      borderRadius: 8,
      padding: 2,
    },
    progress: {
      width: '50%',
      height: 8,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: COLORS.WHITE,
    },
    text: {
      color: COLORS.WHITE,
      fontWeight: '600',
    },
  });

export default styles;
