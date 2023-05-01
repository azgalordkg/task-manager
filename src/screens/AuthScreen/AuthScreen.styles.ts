import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { SchemeType } from '@/types';
import { addShadow } from '@/utils';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    topView: {
      flex: 0,
      backgroundColor: theme.BACKGROUND.SECONDARY,
      marginBottom: 30,
    },
    mainWrapper: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.BACKGROUND.SECONDARY,
      paddingHorizontal: 20,
    },
    logoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: 8,
      marginBottom: 20,
    },
    logoText: {
      color: theme.TEXT.ACCENT,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 19,
    },
    authTitle: {
      color: theme.TEXT.PRIMARY,
      lineHeight: 16,
      marginBottom: 60,
      width: '100%',
      textAlign: 'center',
    },
    forgotPassword: {
      fontSize: 16,
      lineHeight: 19,
      color: theme.TEXT.ACCENT,
      width: '100%',
      textAlign: 'right',
    },
    formWrapper: {
      rowGap: 30,
    },
    authSwitch: {
      borderRadius: 12,
      flexDirection: 'row',
      columnGap: 20,
      backgroundColor: theme.BACKGROUND.NEUTRAL,
      padding: 4,
    },
    switchItem: {
      borderRadius: 8,
      width: '47%',
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    authSwitchText: {
      textAlign: 'center',
      width: '100%',
      fontSize: 18,
      lineHeight: 21,
      color: theme.TEXT.PRIMARY,
    },
    authSwitchSmallText: {
      fontSize: 14,
    },
    authSwitchItemActive: {
      backgroundColor: theme.BACKGROUND.ACCENT,
    },
    formContainer: {
      rowGap: 20,
    },
    continueContainer: {
      flexDirection: 'row',
      columnGap: 10,
      alignItems: 'center',
    },
    divider: {
      height: 1,
      flexGrow: 1,
      backgroundColor: theme.BORDERS.PRIMARY,
    },
    continueTitle: {
      textAlign: 'center',
      color: theme.TEXT.SECONDARY,
      lineHeight: 17,
    },
    authVariantContainer: {
      rowGap: 12,
    },
    authVariantItem: {
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      justifyContent: 'center',
      columnGap: 10,
      backgroundColor: COLORS.WHITE,
      ...addShadow({ shadowRadius: 2, width: 0.5, height: 0.5 }),
    },
    authVariantTitle: {
      fontSize: 18,
      lineHeight: 21,
      color: COLORS.BLACK_DARK,
    },
  });

export default styles;
