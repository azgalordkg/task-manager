import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
  },
  titleWrapper: {
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
  },
  fieldsWrapper: {
    flex: 1,
    width: '100%',
  },
  deleteButton: {
    paddingVertical: 3,
    paddingHorizontal: 4,
    position: 'absolute',
    right: 0,
  },
});

export default styles;
