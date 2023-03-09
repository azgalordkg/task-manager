import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AboutUs: undefined;
  Settings: undefined;
  ManageTags: undefined;
  TagsSettings: undefined;
  Documents?: { isPrivacyPolicy?: boolean };
  CreateTag?: { id?: string };
  CreateTask?: { id?: string };
  Task: { id: string };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
