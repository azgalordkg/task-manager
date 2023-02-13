import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Task: { id: string };
};

export type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Task'>;