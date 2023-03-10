import { schemeType } from '@/types/scheme';

export type themeValue = string | null | undefined;

export interface ThemeProviderType {
  activeTheme: themeValue;
  themeHandleChange: (value: themeValue) => Promise<void>;
  colorScheme: schemeType;
}
