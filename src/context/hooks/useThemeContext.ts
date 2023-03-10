import { useContext } from 'react';

import { ThemeProviderContext } from '../providers';

export const useThemeContext = () => {
  const { activeTheme, themeHandleChange, colorScheme } =
    useContext(ThemeProviderContext);

  return {
    activeTheme,
    themeHandleChange,
    colorScheme,
  };
};
