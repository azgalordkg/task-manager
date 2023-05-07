import { UserInfo } from '@/types';

export interface AuthResponse {
  token: string;
}

export interface AuthState {
  user: UserInfo | null;
}
