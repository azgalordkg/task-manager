import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { CustomDrawer } from '@/components/features/CustomDrawer';
import { AboutUs, HomeScreen, Settings, TaskScreen } from '@/screens';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 250 } }}
      drawerContent={CustomDrawer}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={Root} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
