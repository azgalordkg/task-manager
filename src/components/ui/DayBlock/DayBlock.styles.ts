import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

export interface StyleProps {
  isToday?: boolean;
}

const styles = ({ isToday }: StyleProps) =>
  StyleSheet.create({
    container: {
      paddingVertical: 20,
      backgroundColor: COLORS.GREY_BG,
      marginBottom: 30,
    },
    contentWrapper: {
      paddingHorizontal: 20,
    },
    dateWrapper: {
      marginBottom: 14,
      flexDirection: 'row',
      alignItems: 'center',
    },
    todayWrapper: {
      width: 60,
      borderRadius: 8,
      marginLeft: 'auto',
      backgroundColor: COLORS.ORANGE,
    },
    dayWrapper: {
      height: 30,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isToday ? COLORS.ORANGE : COLORS.WHITE,
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
      color: COLORS.WHITE,
      fontWeight: '700',
      fontSize: 18,
    },
    dayOfWeek: {
      color: COLORS.WHITE,
      fontSize: 18,
    },
  });

export default styles;
