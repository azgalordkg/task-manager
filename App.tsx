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
  CreateTagScreen,
  CreateTaskScreen,
  DashboardScreen,
  DocumentsScreen,
  LanguageScreen,
  ManageTagsScreen,
  PurchaseScreen,
  SettingsScreen,
  TagsSettingsScreen,
  TaskDay,
  ThemeScreen,
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
                  initialRouteName="Dashboard"
                  screenOptions={{
                    headerShown: false,
                  }}>
                  <Stack.Group>
                    <Stack.Screen
                      name="Dashboard"
                      component={DashboardScreen}
                    />
                    <Stack.Screen name="TaskDay" component={TaskDay} />
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen
                      name="TagsSettings"
                      component={TagsSettingsScreen}
                    />
                    <Stack.Screen name="Theme" component={ThemeScreen} />
                    <Stack.Screen name="Language" component={LanguageScreen} />
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
                      name="ManageTags"
                      component={ManageTagsScreen}
                    />
                    <Stack.Screen
                      name="CreateTag"
                      component={CreateTagScreen}
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
