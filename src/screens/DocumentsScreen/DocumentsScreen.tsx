import React, { FC, useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import { MainLayout } from '@/components/layouts';
import {
  BackButtonHeader,
  DocumentsContent,
  DocumentsHeader,
} from '@/components/ui';
import {
  PRIVACY_POLICY,
  PRIVACY_POLICY_DESCRIPTION,
  TERMS_OF_USE,
} from '@/constants';
import { ScreenProps } from '@/types';

import styles from './DocumentsScreen.styles';

export const DocumentsScreen: FC<ScreenProps<'Documents'>> = ({
  navigation,
  route,
}) => {
  const isPrivacyPolicy = route?.params?.isPrivacyPolicy;
  const onClose = () => navigation.goBack();
  const [activeSection, setActiveSection] = useState<number[]>([0]);

  const screenTitle = isPrivacyPolicy ? 'Privacy Policy' : 'Terms of Use';
  const screenContent = isPrivacyPolicy ? PRIVACY_POLICY : TERMS_OF_USE;

  return (
    <MainLayout>
      <View style={styles.contentWrapper}>
        <BackButtonHeader onPress={onClose} title={screenTitle} />

        <View style={styles.container}>
          <Text style={styles.update}>
            Last updated {screenContent.LAST_UPDATED}
          </Text>
          <ScrollView>
            {isPrivacyPolicy && (
              <DocumentsContent content={PRIVACY_POLICY_DESCRIPTION} />
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
    </MainLayout>
  );
};
