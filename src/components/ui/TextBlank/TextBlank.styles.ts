import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: COLORS.QUICK_TASK_BUTTON,
    borderStyle: 'dashed',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: COLORS.PLACEHOLDER,
    fontSize: 16,
  },
});

export default styles;
