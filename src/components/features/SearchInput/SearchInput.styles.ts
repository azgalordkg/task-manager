import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  inputContainer: {
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#333',
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
