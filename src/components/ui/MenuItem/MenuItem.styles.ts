import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';

const styles = (theme: SchemeType, isFirst?: boolean, isLast?: boolean) =>
  StyleSheet.create({
    contentWrapper: {
      paddingHorizontal: 16,
      backgroundColor: theme.BACKGROUND_MODAL,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 14,
      borderTopLeftRadius: isFirst ? 12 : 0,
      borderTopRightRadius: isFirst ? 12 : 0,
      borderBottomLeftRadius: isLast ? 12 : 0,
      borderBottomRightRadius: isLast ? 12 : 0,
      borderBottomWidth: !isLast ? 1 : 0,
      borderColor: COLORS.GREY_MEDIUM,
    },
    prependIcon: {
      marginRight: 10,
    },
    text: {
      flexGrow: 1,
      color: theme.TEXT_PRIMARY,
      fontSize: 18,
    },
    count: {
      color: COLORS.GREY_ICONS,
      fontSize: 16,
    },
  });

export default styles;
