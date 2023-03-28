import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { BreakLine, MenuItem } from '@/components/ui';
import { COLORS } from '@/constants';
import { useThemeContext } from '@/context/hooks';
import { ScreenProps } from '@/types';

import styles from './AboutUs.styles';

export const AboutUs: FC<ScreenProps<'AboutUs'>> = ({ navigation }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  const { goBack } = useNavigation();

  const handleClose = () => goBack();

  return (
    <MainLayout screenTitle="About Us" onBack={handleClose}>
      <View style={style.contentWrapper}>
        <View style={style.contentContainer}>
          <Text style={style.screenTitle}>Simplify. Organize. Conquer.</Text>

          <BreakLine color={COLORS.GREY_DARK} />

          <Text style={style.screenDescription}>
            Lumos Engineering is a software development company dedicated to
            creating innovative and user-friendly applications. Our goal is to
            make technology work for you, not the other way around. That's why
            we're excited to introduce Tasker, our new to-do list application
            that strikes the perfect balance between functionality and design.
          </Text>

          <Text style={style.screenDescription}>
            At Lumos Engineering, we believe that productivity should be simple
            and accessible. That's why we designed Tracker to be both easy to
            use and visually appealing. With its clean, intuitive interface,
            Tracker makes it simple to keep track of your tasks, deadlines, and
            daily to-dos. Whether you're at work, home, or on the go, Tracker is
            always with you, helping you stay organized and on top of your game.
          </Text>

          <View style={style.footerContainer}>
            <MenuItem
              onPress={() =>
                navigation.navigate('Documents', { isPrivacyPolicy: true })
              }>
              Privacy Policy
            </MenuItem>
            <MenuItem onPress={() => navigation.navigate('Documents')}>
              Terms of use
            </MenuItem>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};
