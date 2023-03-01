import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

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
  inputWrapper: {
    marginBottom: 16,
  },
  dateTitle: {
    fontSize: 18,
    color: COLORS.BG,
    marginBottom: 10,
    fontWeight: '500',
  },
  timeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    marginBottom: 40,
  },
});

export default styles;
