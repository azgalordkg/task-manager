import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AboutUs: undefined;
  Settings: undefined;
  ManageTags: undefined;
  CreateTask?: { id?: string };
  Task: { id: string };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
