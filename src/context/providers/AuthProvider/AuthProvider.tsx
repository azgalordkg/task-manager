import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { axiosInstance } from '@/api';
import { TOKEN, URL_ROUTES } from '@/constants';
import { AuthData } from '@/types';
import { Storage } from '@/utils';

import { AuthProviderTypes } from './AuthProvider.types';

export const AuthProviderContext = createContext<AuthProviderTypes>({
  user: null,
  loading: false,
  signIn: (_: AuthData) => {},
  signOut: () => {},
  signUp: (_: AuthData) => {},
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUserAuthStatus = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`${URL_ROUTES.AUTH}/me`);
      setUser(response.data);
    } catch (error) {
      console.log('Error checking auth status:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void checkUserAuthStatus();
  }, []);

  const signIn = async (data: AuthData) => {
    try {
      const response = await axiosInstance.post(
        `${URL_ROUTES.AUTH}/login`,
        data,
      );
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    setUser(null);
    await Storage.removeData(TOKEN);
  };

  const signUp = async (data: AuthData) => {
    try {
      const response = await axiosInstance.post(
        `${URL_ROUTES.AUTH}/register`,
        data,
      );
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthProviderContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        signUp,
      }}>
      {children}
    </AuthProviderContext.Provider>
  );
};
