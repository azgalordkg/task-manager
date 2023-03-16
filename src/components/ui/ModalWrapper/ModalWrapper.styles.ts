import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    modal: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: theme.BACKGROUND_MODAL,
      padding: 20,
      paddingTop: 15,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    closerWrapper: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    closer: {
      height: 5,
      width: 65,
      backgroundColor: COLORS.GREY_LIGHT,
      borderRadius: 3,
    },
    footer: {
      paddingVertical: 15,
      width: '100%',
      alignItems: 'center',
    },
  });

export default styles;
