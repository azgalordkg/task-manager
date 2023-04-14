export type ThemeName = 'default' | 'jade';

export interface SchemeType {
  BACKGROUND: {
    PRIMARY: string;
    SECONDARY: string;
    ACCENT: string;
    NEUTRAL: string;
    INPUT: string;
  };
  TEXT: {
    PRIMARY: string;
    SECONDARY: string;
    ACCENT: string;
  };
  BUTTONS: {
    PRIMARY: string;
    SECONDARY: string;
    TEXT: string;
  };
  ICONS: {
    PRIMARY: string;
    SECONDARY: string;
  };
  BORDERS: {
    PRIMARY: string;
  };
}
