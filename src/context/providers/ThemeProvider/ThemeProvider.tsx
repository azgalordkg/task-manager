import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { COLORS, DARK_COLORS } from '@/constants';
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

  const colorScheme = activeTheme === 'light' ? COLORS : DARK_COLORS;

  return (
    <ThemeProviderContext.Provider
      value={{ activeTheme, themeHandleChange, colorScheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
