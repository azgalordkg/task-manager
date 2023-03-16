import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

export interface StyleProps {
  isToday?: boolean;
  theme: SchemeType;
}

const styles = ({ isToday, theme }: StyleProps) =>
  StyleSheet.create({
    container: {
      paddingVertical: 20,
      backgroundColor: theme.BACKGROUND_SECONDARY,
    },
    contentWrapper: {
      paddingHorizontal: 20,
    },
    dateWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dateContainer: {
      width: '100%',
      flexDirection: 'row',
      paddingRight: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dayWrapper: {
      height: 30,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isToday
        ? theme.BACKGROUND_ACCENT
        : theme.BACKGROUND_NEUTRAL,
      borderBottomEndRadius: 8,
      borderTopEndRadius: 8,
      marginRight: 12,
    },
    day: {
      fontSize: 22,
      fontWeight: '600',
    },
    monthWrapper: {
      flexDirection: 'row',
    },
    month: {
      color: theme.TEXT_PRIMARY,
      fontWeight: '700',
      fontSize: 18,
    },
    dayOfWeek: {
      color: theme.TEXT_PRIMARY,
      fontSize: 18,
    },
    accordionVisibleStatus: {
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 15,
      color: theme.TEXT_INFO,
    },
  });

export default styles;
