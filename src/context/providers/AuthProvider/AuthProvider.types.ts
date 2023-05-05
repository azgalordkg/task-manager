import { AuthData, UserInfo } from '@/types';

export interface AuthProviderTypes {
  user: UserInfo | null;
  loading: boolean;
  signIn: (_: AuthData) => void;
  signOut: () => void;
  signUp: (_: AuthData) => void;
}
