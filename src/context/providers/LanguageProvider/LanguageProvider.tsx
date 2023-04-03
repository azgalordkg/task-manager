import React, { createContext, FC, PropsWithChildren, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

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

  const getCurrentLanguage = async () => {
    const selectedLanguage = await Storage.getData('language');
    const systemLanguage = await getSystemLanguage().split('_')[0];

    await i18n.changeLanguage(selectedLanguage || systemLanguage);
  };

  useEffect(() => {
    void getCurrentLanguage();
  }, []);

  const languageHandleChange = async (value: string) => {
    await Storage.storeData('language', value);
    await i18n.changeLanguage(value);
  };

  return (
    <LanguageProviderContext.Provider value={{ languageHandleChange }}>
      {children}
    </LanguageProviderContext.Provider>
  );
};
