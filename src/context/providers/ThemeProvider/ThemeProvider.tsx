import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { Appearance } from 'react-native';

import { DARK_SCHEMA, LIGHT_SCHEMA } from '@/constants';
import { Storage } from '@/utils';

import { ThemeProviderType, themeValue } from './ThemeProvider.types';

export const ThemeProviderContext = createContext<ThemeProviderType>(
  {} as ThemeProviderType,
);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const scheme = Appearance.getColorScheme();
  const [activeTheme, setActiveTheme] = useState<themeValue>('');

  const themeHandleChange = async (value: themeValue) => {
    value && setActiveTheme(value);
    await Storage.storeData('theme', value);
  };

  const getCurrentTheme = async () => {
    const currentTheme = await Storage.getData('theme');
    setActiveTheme(currentTheme);
  };

  useEffect(() => {
    void getCurrentTheme();
  }, []);

  const theme = () => {
    const isSystem = activeTheme === 'system' ? scheme : activeTheme;

    if (isSystem === 'light') {
      return LIGHT_SCHEMA;
    } else {
      return DARK_SCHEMA;
    }
  };

  return (
    <ThemeProviderContext.Provider
      value={{ activeTheme, themeHandleChange, theme: theme() }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
