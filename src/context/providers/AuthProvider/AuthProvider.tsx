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
  const [loading, setLoading] = useState(false);

  const setToken = async (token: string) => {
    if (token) {
      await Storage.storeData(TOKEN, token);
    }
  };

  const checkUserAuthStatus = async () => {
    try {
      // await Storage.removeData(TOKEN);
      setLoading(true);
      const response = await axiosInstance.get(`${URL_ROUTES.AUTH}/me`);

      await setUser(response?.data);
    } catch (error) {
      console.error('Error checking auth status: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void checkUserAuthStatus();
  }, []);

  const signIn = async (data: AuthData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        `${URL_ROUTES.AUTH}/login`,
        data,
      );

      await setToken(response?.data?.token);
      await checkUserAuthStatus();
    } catch (error) {
      console.error('Error signing in: ', error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser(null);
    await Storage.removeData(TOKEN);
  };

  const signUp = async (data: AuthData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        `${URL_ROUTES.AUTH}/register`,
        data,
      );

      await setToken(response?.data?.token);
      await checkUserAuthStatus();
    } catch (error) {
      console.error('Error signing up: ', error);
    } finally {
      setLoading(false);
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
