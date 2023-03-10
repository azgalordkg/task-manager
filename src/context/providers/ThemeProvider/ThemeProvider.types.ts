import { SchemeType } from '@/types/scheme';

export type themeValue = string | null | undefined;

export interface ThemeProviderType {
  activeTheme: themeValue;
  themeHandleChange: (value: themeValue) => Promise<void>;
  theme: SchemeType;
}
