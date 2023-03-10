import { LIGHT_SCHEMA } from '@/constants';

export type colorsKeys = keyof typeof LIGHT_SCHEMA;

export type SchemeType = Record<colorsKeys, string>;
