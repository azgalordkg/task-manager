import { useContext } from 'react';

import { AuthProviderContext } from '@/context/providers/AuthProvider';

export const useAuthContext = () => {
  const { user, loading, signIn, signOut, signUp } =
    useContext(AuthProviderContext);

  return {
    user,
    loading,
    signIn,
    signOut,
    signUp,
  };
};
