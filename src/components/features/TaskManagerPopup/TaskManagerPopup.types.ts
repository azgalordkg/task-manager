import { Animated } from 'react-native';

export interface Props {
  scale: Animated.Value;
  handleDeleteTask: () => void;
}
