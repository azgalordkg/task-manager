import { StyleSheet } from 'react-native';

const styles = (color: string, marginBottom?: number) =>
  StyleSheet.create({
    brakeLine: {
      width: '100%',
      height: 2,
      backgroundColor: color,
      marginBottom: marginBottom || 0,
      alignItems: 'flex-end',
    },
  });

export default styles;
