import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL, URL_ROUTES } from '@/constants';
import { AuthResponse } from '@/store/apis/auth/auth.types';
import { AuthData, UserInfo } from '@/types';
import { prepareHeaders } from '@/utils';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders,
  }),
  tagTypes: ['UserInfo'],
  endpoints: builder => ({
    getMe: builder.query<UserInfo, void>({
      query: () => `${URL_ROUTES.AUTH}/me`,
      providesTags: ['UserInfo'],
    }),

    login: builder.mutation<AuthResponse, AuthData>({
      query: userData => ({
        url: `${URL_ROUTES.AUTH}/login`,
        method: 'POST',
        body: userData,
      }),
    }),

    register: builder.mutation<AuthResponse, AuthData>({
      query: userData => ({
        url: `${URL_ROUTES.AUTH}/register`,
        method: 'POST',
        body: userData,
      }),
    }),

    googleSignIn: builder.mutation<AuthResponse, string>({
      query: (idToken: string) => ({
        url: `${URL_ROUTES.AUTH}/google`,
        method: 'POST',
        body: { token: idToken },
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useLoginMutation,
  useRegisterMutation,
  useGoogleSignInMutation,
} = authApi;
