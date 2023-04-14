import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import {
  DocumentsContent,
  DocumentsHeader,
  ModalScreenWrapper,
} from '@/components/ui';
import { useThemeContext } from '@/context/hooks';
import { ScreenProps } from '@/types';
import { getPrivacyPolicy, getTermsOfUse } from '@/utils/translation';

import styles from './DocumentsScreen.styles';

export const DocumentsScreen: FC<ScreenProps<'Documents'>> = ({
  navigation,
  route,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  const isPrivacyPolicy = route?.params?.isPrivacyPolicy;
  const onClose = () => navigation.goBack();
  const [activeSection, setActiveSection] = useState<number[]>([0]);
  const { t } = useTranslation();

  const screenTitle = isPrivacyPolicy ? t('PRIVACY_POLICY') : t('TERMS_OF_USE');
  const screenContent = isPrivacyPolicy
    ? getPrivacyPolicy(t)
    : getTermsOfUse(t);

  return (
    <ModalScreenWrapper title={screenTitle} onRequestClose={onClose}>
      <View style={style.contentWrapper}>
        <View style={style.container}>
          <Text style={style.update}>
            {t('LAST_UPDATED')} {screenContent.LAST_UPDATED}
          </Text>
          <ScrollView>
            {isPrivacyPolicy && (
              <DocumentsContent content={t('PRIVACY_POLICY_DESCRIPTION')} />
            )}
            <Accordion
              touchableComponent={TouchableWithoutFeedback}
              sections={screenContent.DATA}
              activeSections={activeSection}
              renderHeader={({ title, id }) => (
                <View>
                  <DocumentsHeader
                    title={title}
                    active={activeSection.includes(id)}
                  />
                </View>
              )}
              renderContent={({ content }) => (
                <DocumentsContent content={content} />
              )}
              onChange={setActiveSection}
              expandMultiple={true}
            />
          </ScrollView>
        </View>
      </View>
    </ModalScreenWrapper>
  );
};
