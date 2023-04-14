import '@/i18n.config';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { EventProvider } from 'react-native-outside-press';

import {
  LanguageProvider,
  TagManageProvider,
  TaskListProvider,
  ThemeProvider,
} from '@/context/providers';
import {
  AboutUsScreen,
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
  const eventProviderStyles = { flex: 1 };
  return (
    <EventProvider style={eventProviderStyles}>
      <LanguageProvider>
        <TaskListProvider>
          <TagManageProvider>
            <ThemeProvider>
              <NavigationContainer>
                <Stack.Navigator
                  initialRouteName="Upcoming"
                  // initialRouteName="Dashboard"
                  screenOptions={{
                    headerShown: false,
                  }}>
                  <Stack.Group>
                    <Stack.Screen
                      name="Dashboard"
                      component={DashboardScreen}
                    />
                    <Stack.Screen name="TaskDay" component={TasksScreen} />
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen
                      name="LabelSettings"
                      component={LabelSettingsScreen}
                    />
                    <Stack.Screen name="Theme" component={ThemeScreen} />
                    <Stack.Screen name="Language" component={LanguageScreen} />
                    <Stack.Screen name="Upcoming" component={UpcomingScreen} />
                  </Stack.Group>
                  <Stack.Group
                    screenOptions={{
                      presentation: 'modal',
                      contentStyle: { backgroundColor: 'transparent' },
                    }}>
                    <Stack.Screen
                      name="CreateTask"
                      component={CreateTaskScreen}
                    />
                    <Stack.Screen
                      name="ManageLabels"
                      component={ManageLabelsScreen}
                    />
                    <Stack.Screen
                      name="CreateLabel"
                      component={CreateLabelScreen}
                    />
                    <Stack.Screen
                      name="Documents"
                      component={DocumentsScreen}
                    />
                    <Stack.Screen name="AboutUs" component={AboutUsScreen} />
                    <Stack.Screen name="Purchase" component={PurchaseScreen} />
                  </Stack.Group>
                </Stack.Navigator>
              </NavigationContainer>
            </ThemeProvider>
          </TagManageProvider>
        </TaskListProvider>
      </LanguageProvider>
    </EventProvider>
  );
};

export default App;
