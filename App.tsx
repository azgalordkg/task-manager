import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { EventProvider } from 'react-native-outside-press';

import {
  TagManageProvider,
  TaskListProvider,
  ThemeProvider,
} from '@/context/providers';
import {
  AboutUs,
  CreateTagScreen,
  CreateTaskScreen,
  DocumentsScreen,
  HomeScreen,
  ManageTagsScreen,
  PurchaseScreen,
  Settings,
  TagsSettingsScreen,
  Theme,
} from '@/screens';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <EventProvider style={{ flex: 1 }}>
      <TaskListProvider>
        <TagManageProvider>
          <ThemeProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Group>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="AboutUs" component={AboutUs} />
                  <Stack.Screen name="Settings" component={Settings} />
                  <Stack.Screen name="Documents" component={DocumentsScreen} />
                  <Stack.Screen
                    name="TagsSettings"
                    component={TagsSettingsScreen}
                  />
                  <Stack.Screen name="Theme" component={Theme} />
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
                  <Stack.Screen name="CreateTag" component={CreateTagScreen} />
                  <Stack.Screen name="Purchase" component={PurchaseScreen} />
                </Stack.Group>
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </TagManageProvider>
      </TaskListProvider>
    </EventProvider>
  );
};

export default App;
