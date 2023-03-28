import React, { FC } from 'react';
import { View } from 'react-native';

import { MainLayout } from '@/components/layouts';
import { MenuItem } from '@/components/ui/MenuItem';
import { ScreenProps } from '@/types';

import styles from './Settings.styles';

export const Settings: FC<ScreenProps<'Settings'>> = ({ navigation }) => {
  // const [isNotification, setIsNotification] = useState(true);
  // const onNotificationSwitchHandler = (value: boolean) => {
  //   setIsNotification(value);
  // };

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <MainLayout screenTitle="Settings" onBack={onBackPressHandler}>
      <View style={styles.contentWrapper}>
        <View style={styles.listWrapper}>
          <MenuItem onPress={() => navigation.navigate('TagsSettings')}>
            Tags
          </MenuItem>
          {/*<MenuItem onPress={() => {}}>Language</MenuItem>*/}
          <MenuItem onPress={() => navigation.navigate('Theme')}>
            Theme
          </MenuItem>
          {/*<MenuItem
            value={isNotification}
            onToggleSwitch={onNotificationSwitchHandler}
            isSwitcher>
            Notifications
          </MenuItem>*/}
          <MenuItem
            onPress={() => {
              navigation.navigate('AboutUs');
            }}>
            About Us
          </MenuItem>
          {/*<MenuItem
            icon={Crown}
            color={COLORS.YELLOW}
            onPress={() => {
              navigation.navigate('Purchase');
            }}>
            Upgrade
          </MenuItem>*/}
        </View>
      </View>
    </MainLayout>
  );
};
