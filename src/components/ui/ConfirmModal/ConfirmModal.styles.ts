import { StyleSheet } from 'react-native';

import { SchemeType } from '@/types';

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalView: {
      backgroundColor: theme.BACKGROUND_MODAL,
      margin: 20,
      borderRadius: 20,
      padding: 22,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      color: theme.TEXT_PRIMARY,
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 8,
    },
    modalDescription: {
      color: theme.TEXT_PRIMARY,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: '400',
      marginBottom: 22,
    },
    modalButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      columnGap: 8,
    },
  });

export default styles;
