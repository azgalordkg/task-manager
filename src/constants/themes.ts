import { COLORS } from '@/constants/colors';
import { ThemeName } from '@/types';

export const DEFAULT_THEME = {
  BACKGROUND: {
    PRIMARY: COLORS.RED,
    SECONDARY: COLORS.BLACK_DARK,
    ACCENT: COLORS.RED,
    NEUTRAL: COLORS.BLACK_MEDIUM,
  },
  TEXT: {
    PRIMARY: COLORS.WHITE,
    SECONDARY: COLORS.GREY_LIGHT,
    ACCENT: COLORS.RED,
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
  INPUTS: {
    PRIMARY: COLORS.GREY_DARK,
    SECONDARY: COLORS.WHITE,
  },
};

export const NEUTRAL_THEME = {
  BACKGROUND: {
    PRIMARY: COLORS.WHITE,
    SECONDARY: COLORS.WHITE_DARK,
    ACCENT: COLORS.RED,
    NEUTRAL: COLORS.WHITE,
    INPUT: COLORS.WHITE,
  },
  TEXT: {
    PRIMARY: COLORS.BLACK_DARK,
    SECONDARY: COLORS.GREY_DARK,
    ACCENT: COLORS.RED,
  },
  BUTTONS: {
    PRIMARY: COLORS.RED,
    SECONDARY: COLORS.BLACK_DARK,
    TEXT: COLORS.WHITE,
  },
  ICONS: {
    PRIMARY: COLORS.BLACK_DARK,
    SECONDARY: COLORS.GREY_LIGHT,
  },
  BORDERS: {
    PRIMARY: COLORS.WHITE_DARK,
  },
};

export const JADE_THEME = {
  ...DEFAULT_THEME,
  BACKGROUND: {
    ...DEFAULT_THEME.BACKGROUND,
    PRIMARY: COLORS.GREEN,
    ACCENT: COLORS.GREEN,
  },
  TEXT: {
    ...DEFAULT_THEME.TEXT,
    ACCENT: COLORS.GREEN,
  },
  BUTTONS: {
    ...DEFAULT_THEME.BUTTONS,
    PRIMARY: COLORS.GREEN,
  },
};

export const DARK_THEME = {
  ...DEFAULT_THEME,
  BACKGROUND: {
    ...DEFAULT_THEME.BACKGROUND,
    PRIMARY: COLORS.DARK,
    ACCENT: COLORS.RED,
  },
  BUTTONS: {
    ...DEFAULT_THEME.BUTTONS,
    PRIMARY: COLORS.RED,
  },
};

export const THEMES = {
  default: DEFAULT_THEME,
  jade: JADE_THEME,
  dark: DARK_THEME,
  neutral: NEUTRAL_THEME,
};

export const DARK_THEMES_LIST: ThemeName[] = ['default', 'jade', 'dark'];

export const THEMES_MENU_ITEMS = [
  {
    label: 'default',
    color: COLORS.RED,
  },
  {
    label: 'jade',
    color: COLORS.GREEN,
  },
  {
    label: 'dark',
    color: COLORS.DARK,
  },
  {
    label: 'neutral',
    color: COLORS.WHITE,
    bodyBackgroundColor: COLORS.WHITE_MEDIUM,
    titleColor: COLORS.BLACK_DARK,
  },
];
