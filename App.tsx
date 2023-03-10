import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import {
  TagManageProvider,
  TaskListProvider,
  ThemeProvider,
} from '@/context/providers';
import {
  AboutUs,
  CreateTagScreen,
  CreateTaskScreen,
  HomeScreen,
  ManageTagsScreen,
  Settings,
  TagsSettingsScreen,
  TaskScreen,
  Theme,
} from '@/screens';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <TaskListProvider>
      <TagManageProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              // initialRouteName="Theme"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Task" component={TaskScreen} />
                <Stack.Screen
                  name="TagsSettings"
                  component={TagsSettingsScreen}
                />
                <Stack.Screen name="Theme" component={Theme} />
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
                <Stack.Screen name="ManageTags" component={ManageTagsScreen} />
                <Stack.Screen name="CreateTag" component={CreateTagScreen} />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </TagManageProvider>
    </TaskListProvider>
  );
};

export default App;
