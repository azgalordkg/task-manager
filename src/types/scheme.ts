import { COLORS } from '@/constants';

export type colorsKeys = keyof typeof COLORS;

export type schemeType = Record<colorsKeys, string>;
