import React, { FC, useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import { MainLayout } from '@/components/layouts';
import {
  BackButtonHeader,
  DocumentsContent,
  DocumentsHeader,
} from '@/components/ui';
import { TERMS_OF_USE_SECTIONS } from '@/constants';
import { ScreenProps } from '@/types';

import styles from './TermsOfUseScreen.styles';

export const TermsOfUseScreen: FC<ScreenProps<'TermsOfUse'>> = ({
  navigation,
}) => {
  const onClose = () => navigation.goBack();
  const [activeSection, setActiveSection] = useState<number[]>([0]);

  return (
    <MainLayout>
      <View style={styles.contentWrapper}>
        <BackButtonHeader onPress={onClose} title="Terms of Use" />

        <View style={styles.container}>
          <Text style={styles.update}>Last updated March 06, 2023</Text>
          <ScrollView>
            <Accordion
              touchableComponent={TouchableWithoutFeedback}
              sections={TERMS_OF_USE_SECTIONS}
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
              onChange={sections => {
                console.log(123);
                setActiveSection(sections);
              }}
              expandMultiple={true}
            />
          </ScrollView>
        </View>
      </View>
    </MainLayout>
  );
};
