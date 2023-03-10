import { useContext } from 'react';

import { ThemeProviderContext } from '../providers';

export const useThemeContext = () => {
  const { activeTheme, themeHandleChange, theme } =
    useContext(ThemeProviderContext);

  return {
    activeTheme,
    themeHandleChange,
    theme,
  };
};
