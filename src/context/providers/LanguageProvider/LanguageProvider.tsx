import 'moment/locale/ru';
import 'moment/locale/fr';
import 'moment/locale/de';
import 'moment/locale/it';

import moment from 'moment';
import React, { createContext, FC, PropsWithChildren, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

import { localeShortDate } from '@/constants/translations';
import { Storage } from '@/utils';

import { LanguageProviderType } from './LanguageProvider.types';

export const LanguageProviderContext = createContext<LanguageProviderType>(
  {} as LanguageProviderType,
);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();

  const getSystemLanguage = () => {
    if (Platform.OS === 'ios') {
      return (
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      );
    }

    return NativeModules.I18nManager.localeIdentifier;
  };

  const handleChangeLocale = (value: string) => {
    moment.locale(value);
    moment.updateLocale(value, {
      monthsShort: localeShortDate[value].monthsShort,
      weekdaysShort: localeShortDate[value].weekdaysShort,
    });
  };

  const getCurrentLanguage = async () => {
    const selectedLanguage = await Storage.getData('language');
    const systemLanguage = (await getSystemLanguage()).split('_')[0];
    const supportedLanguages = ['de', 'fr', 'es', 'ru'];
    const languageToUse = supportedLanguages.includes(selectedLanguage)
      ? selectedLanguage
      : systemLanguage || 'en';

    await handleChangeLocale(languageToUse);
    await i18n.changeLanguage(languageToUse);
  };

  useEffect(() => {
    void getCurrentLanguage();
  }, []);

  const languageHandleChange = async (value: string) => {
    await Storage.storeData('language', value);
    await i18n.changeLanguage(value);
    await handleChangeLocale(value);
  };

  return (
    <LanguageProviderContext.Provider value={{ languageHandleChange }}>
      {children}
    </LanguageProviderContext.Provider>
  );
};
