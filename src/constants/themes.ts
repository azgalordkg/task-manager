import { COLORS } from '@/constants/colors';
import { ThemeName } from '@/types';

export const DEFAULT_THEME = {
  BACKGROUND: {
    PRIMARY: COLORS.RED,
    SECONDARY: COLORS.BLACK_DARK,
    ACCENT: COLORS.RED,
    NEUTRAL: COLORS.BLACK_MEDIUM,
    INPUT: COLORS.GREY_DARK,
  },
  TEXT: {
    PRIMARY: COLORS.WHITE,
    SECONDARY: COLORS.GREY_LIGHT,
    ACCENT: COLORS.GREEN,
  },
  BUTTONS: {
    PRIMARY: COLORS.RED,
    SECONDARY: COLORS.BLACK_DARK,
    TEXT: COLORS.WHITE,
  },
  ICONS: {
    PRIMARY: COLORS.WHITE,
    SECONDARY: COLORS.GREY_LIGHT,
  },
  BORDERS: {
    PRIMARY: COLORS.GREY_MEDIUM,
  },
};

export const JADE_THEME = {
  ...DEFAULT_THEME,
  BACKGROUND: {
    ...DEFAULT_THEME.BACKGROUND,
    PRIMARY: COLORS.GREEN,
    ACCENT: COLORS.GREEN,
  },
  BUTTONS: {
    ...DEFAULT_THEME.BUTTONS,
    PRIMARY: COLORS.GREEN,
  },
};

export const THEMES = {
  default: DEFAULT_THEME,
  jade: JADE_THEME,
};

export const DARK_THEMES_LIST: ThemeName[] = ['default', 'jade'];

export const THEMES_MENU_ITEMS = [
  {
    label: 'default',
    color: COLORS.RED,
  },
  {
    label: 'jade',
    color: COLORS.GREEN,
  },
];
