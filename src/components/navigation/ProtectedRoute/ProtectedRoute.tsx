import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, PropsWithChildren } from 'react';

import { Loader } from '@/components/ui';
import { useAuthContext } from '@/context/hooks';
import { AuthScreen } from '@/screens';
import { RootStackParamList } from '@/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    );
  }

  return <>{children}</>;
};
