import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '@/components/ui';
import { AuthScreen, ResetPasswordScreen } from '@/screens';
import { selectCurrentUser, useGetMeQuery } from '@/store/apis/auth';
import { RootStackParamList } from '@/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useGetMeQuery();
  const userInfo = useSelector(selectCurrentUser);

  if (isLoading) {
    return <Loader />;
  }

  if (!userInfo) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            contentStyle: { backgroundColor: 'transparent' },
          }}>
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  }

  return <>{children}</>;
};
