import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: undefined;
  TaskDay: undefined;
  AboutUs: undefined;
  Settings: undefined;
  ManageTags: undefined;
  TagsSettings: undefined;
  AppIcon: undefined;
  ContactUs: undefined;
  RateUs: undefined;
  Purchase: undefined;
  Documents?: { isPrivacyPolicy?: boolean };
  CreateTag?: { id?: string };
  CreateTask?: { id?: string };
  Task: { id: string };
  Theme: undefined;
  Language: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
