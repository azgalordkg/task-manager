import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: undefined;
  Tasks?: { isUnscheduled?: boolean };
  AboutUs: undefined;
  Settings: undefined;
  ManageLabels: undefined;
  LabelSettings: undefined;
  AppIcon: undefined;
  ContactUs: undefined;
  RateUs: undefined;
  Purchase: undefined;
  Documents?: { isPrivacyPolicy?: boolean };
  CreateLabel?: { id?: string };
  CreateTask?: { id?: string; isUnscheduled?: boolean };
  Theme: undefined;
  Language: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
