import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { TaskListProvider } from '@/context/providers';
import {
  AboutUs,
  CreateTaskScreen,
  HomeScreen,
  ManageTagsScreen,
  Settings,
  TaskScreen,
} from '@/screens';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <TaskListProvider>
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
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
            <Stack.Screen name="ManageTags" component={ManageTagsScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </TaskListProvider>
  );
};

export default App;
