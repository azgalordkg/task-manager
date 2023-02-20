import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ArrowBack } from '@/components/icons';
import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui/MenuItem';

import styles from './AboutUs.styles';
import { Props } from './AboutUs.types';

export const AboutUs: FC<Props> = () => {
  const { goBack } = useNavigation();

  return (
    <MainLayout>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => goBack()}>
            <ArrowBack />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>About Us</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.screenTitle}>Simplify. Organize. Conquer.</Text>

          <View style={styles.brakeLine} />

          <Text style={styles.screenDescription}>
            Lumos Engineering is a software development company dedicated to
            creating innovative and user-friendly applications. Our goal is to
            make technology work for you, not the other way around. That's why
            we're excited to introduce Tasker, our new to-do list application
            that strikes the perfect balance between functionality and design.
          </Text>

          <Text style={styles.screenDescription}>
            At Lumos Engineering, we believe that productivity should be simple
            and accessible. That's why we designed Tracker to be both easy to
            use and visually appealing. With its clean, intuitive interface,
            Tracker makes it simple to keep track of your tasks, deadlines, and
            daily to-dos. Whether you're at work, home, or on the go, Tracker is
            always with you, helping you stay organized and on top of your game.
          </Text>

          <View style={styles.footerContainer}>
            <MenuItem onPress={() => {}}>Privacy Policy</MenuItem>
            <MenuItem onPress={() => {}}>Terms of use</MenuItem>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};
