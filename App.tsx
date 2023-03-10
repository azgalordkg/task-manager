import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { TagManageProvider, TaskListProvider } from '@/context/providers';
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
  TaskScreen,
} from '@/screens';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <TaskListProvider>
      <TagManageProvider>
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
              <Stack.Screen name="Task" component={TaskScreen} />
              <Stack.Screen name="Documents" component={DocumentsScreen} />
              <Stack.Screen
                name="TagsSettings"
                component={TagsSettingsScreen}
              />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
              <Stack.Screen name="ManageTags" component={ManageTagsScreen} />
              <Stack.Screen name="CreateTag" component={CreateTagScreen} />
              <Stack.Screen name="Purchase" component={PurchaseScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </TagManageProvider>
    </TaskListProvider>
  );
};

export default App;
