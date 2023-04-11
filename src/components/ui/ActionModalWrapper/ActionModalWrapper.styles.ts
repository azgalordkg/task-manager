import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  modalButtonContainer: {
    width: '100%',
    rowGap: 16,
  },
});

export default styles;