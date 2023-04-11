export const RED_COLORS = {
  FIRST: '#FA752B',
  SECOND: '#DE4D26',
  THIRD: '#F44336',
  FORTH: '#DE2658',
  FIFTH: '#FA2BCB',
};

export const PURPLE_COLORS = {
  FIRST: '#CE36F4',
  SECOND: '#8726DE',
  THIRD: '#5F2BFA',
};

export const BLUE_COLORS = {
  FIRST: '#0D4BFF',
  SECOND: '#0C7EE8',
  THIRD: '#00C8FF',
  FORTH: '#0CE8DD',
};

export const GREEN_COLORS = {
  FIRST: '#36F482',
};

export const YELLOW_COLORS = {
  FIRST: '#FFEE30',
  SECOND: '#E9A537',
  THIRD: '#FF9530',
};

export const COLORS = {
  WHITE: '#FFFFFF',
  WHITE_LIGHT: '#E9E9E9',
  WHITE_MEDIUM: '#F5F5F5',
  WHITE_DARK: '#DCDCDC',
  GREY_LIGHT: '#b9b9b9',
  GREY_ICONS: '#989898',
  GREY: '#6a6a6a',
  GREY_MEDIUM: '#3F3F3F',
  GREY_DARK: '#353535',
  BLACK_MEDIUM: '#2A2A2A',
  BLACK_DARK: '#1F1F1F',
  GREEN: '#3DB39E',
  RED: RED_COLORS.THIRD,
  YELLOW: YELLOW_COLORS.SECOND,
  BLUE: BLUE_COLORS.THIRD,
};

export const LIGHT_SCHEMA = {
  // Background
  BACKGROUND_PRIMARY: COLORS.WHITE,
  BACKGROUND_SECONDARY: COLORS.WHITE_MEDIUM,
  BACKGROUND_ACCENT: COLORS.YELLOW,
  BACKGROUND_NEUTRAL: COLORS.WHITE_DARK,
  BACKGROUND_MODAL: COLORS.WHITE,
  BACKGROUND_TASK: COLORS.WHITE_LIGHT,
  // Text
  TEXT_PRIMARY: COLORS.BLACK_DARK,
  TEXT_SECONDARY: COLORS.GREY,
  TEXT_INFO: COLORS.GREY,
  CLEAN_BUTTON_TEXT: COLORS.BLACK_DARK,
  // Buttons
  BUTTONS_PRIMARY: COLORS.GREEN,
  BUTTONS_SECONDARY: COLORS.WHITE_LIGHT,
  BUTTONS_ACCENT: COLORS.BLUE,
  BUTTONS_NEUTRAL: COLORS.WHITE_DARK,
  BUTTONS_ACTION: COLORS.WHITE,
  BUTTONS_ADDITIONAL: COLORS.GREY_LIGHT,
  // Input
  INPUT_DEFAULT: COLORS.WHITE_MEDIUM,
  INPUT_QUICK_TASK: COLORS.WHITE_DARK,
};

export const DARK_SCHEMA = {
  // Background
  BACKGROUND_PRIMARY: COLORS.BLACK_DARK,
  BACKGROUND_SECONDARY: COLORS.BLACK_MEDIUM,
  BACKGROUND_ACCENT: COLORS.YELLOW,
  BACKGROUND_NEUTRAL: COLORS.WHITE,
  BACKGROUND_MODAL: COLORS.BLACK_MEDIUM,
  BACKGROUND_TASK: COLORS.BLACK_MEDIUM,
  // Text
  TEXT_PRIMARY: COLORS.WHITE,
  TEXT_SECONDARY: COLORS.GREY_LIGHT,
  TEXT_INFO: COLORS.GREY,
  CLEAN_BUTTON_TEXT: COLORS.WHITE,
  // Buttons
  BUTTONS_PRIMARY: COLORS.GREEN,
  BUTTONS_SECONDARY: COLORS.GREY_MEDIUM,
  BUTTONS_ACCENT: COLORS.BLUE,
  BUTTONS_NEUTRAL: COLORS.GREY_MEDIUM,
  BUTTONS_ACTION: COLORS.WHITE,
  BUTTONS_ADDITIONAL: COLORS.GREY,
  // Input
  INPUT_DEFAULT: COLORS.BLACK_MEDIUM,
  INPUT_QUICK_TASK: COLORS.GREY_MEDIUM,
};

export const AVAILABLE_COLORS = [
  ...Object.values(YELLOW_COLORS),
  ...Object.values(RED_COLORS),
  ...Object.values(PURPLE_COLORS),
  ...Object.values(BLUE_COLORS),
  ...Object.values(GREEN_COLORS),
];

export const COLORS_FOR_BLACK_CHECKMARK = [
  YELLOW_COLORS.FIRST.toLowerCase(),
  YELLOW_COLORS.SECOND.toLowerCase(),
  BLUE_COLORS.THIRD.toLowerCase(),
  BLUE_COLORS.FORTH.toLowerCase(),
  GREEN_COLORS.FIRST.toLowerCase(),
];
