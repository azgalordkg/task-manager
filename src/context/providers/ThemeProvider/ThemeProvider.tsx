import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { DARK_SCHEMA, LIGHT_SCHEMA } from '@/constants';
import { Storage } from '@/utils';

import { ThemeProviderType, themeValue } from './ThemeProvider.types';

export const ThemeProviderContext = createContext<ThemeProviderType>(
  {} as ThemeProviderType,
);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const scheme = useColorScheme();
  const [activeTheme, setActiveTheme] = useState<themeValue>('');

  const themeHandleChange = async (value: themeValue) => {
    const handleThemeValue = value === 'system' ? scheme : value;
    value && setActiveTheme(value);
    await Storage.storeData('theme', handleThemeValue);
  };

  const getCurrentTheme = async () => {
    const currentTheme = await Storage.getData('theme');

    setActiveTheme(currentTheme);
  };

  useEffect(() => {
    void getCurrentTheme();
  }, []);

  const theme = activeTheme === 'light' ? LIGHT_SCHEMA : DARK_SCHEMA;

  return (
    <ThemeProviderContext.Provider
      value={{ activeTheme, themeHandleChange, theme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
