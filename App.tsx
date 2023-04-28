import '@/i18n.config';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { ProvidersLayout } from '@/components/layouts';
import {
  AboutUsScreen,
  AuthScreen,
  CreateLabelScreen,
  CreateTaskScreen,
  DashboardScreen,
  DocumentsScreen,
  LabelSettingsScreen,
  LanguageScreen,
  ManageLabelsScreen,
  PurchaseScreen,
  SettingsScreen,
  TasksScreen,
  ThemeScreen,
  UpcomingScreen,
} from '@/screens';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <ProvidersLayout>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="Language"
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Tasks" component={TasksScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen
              name="LabelSettings"
              component={LabelSettingsScreen}
            />
            <Stack.Screen name="Upcoming" component={UpcomingScreen} />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: 'modal',
              contentStyle: { backgroundColor: 'transparent' },
            }}>
            <Stack.Screen name="Language" component={LanguageScreen} />
            <Stack.Screen name="Theme" component={ThemeScreen} />
            <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
            <Stack.Screen name="ManageLabels" component={ManageLabelsScreen} />
            <Stack.Screen name="CreateLabel" component={CreateLabelScreen} />
            <Stack.Screen name="Documents" component={DocumentsScreen} />
            <Stack.Screen name="AboutUs" component={AboutUsScreen} />
            <Stack.Screen name="Purchase" component={PurchaseScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ProvidersLayout>
  );
};

export default App;
