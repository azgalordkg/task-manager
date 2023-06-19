import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL, URL_ROUTES } from '@/constants';
import { ILabelItem } from '@/types/labels';
import { prepareHeaders } from '@/utils';

export const labelsApi = createApi({
  reducerPath: 'labels',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders,
  }),
  tagTypes: ['Label'],
  endpoints: builder => ({
    getLabels: builder.query<Required<ILabelItem>[], void>({
      query: () => URL_ROUTES.LABELS,
      providesTags: ['Label'],
    }),

    getLabelById: builder.query<Required<ILabelItem>, number | undefined>({
      query: id => `${URL_ROUTES.LABELS}/${id || ''}`,
      providesTags: ['Label'],
    }),

    createOrUpdateLabel: builder.mutation<void, ILabelItem>({
      query: labelData => {
        const labelId = labelData.id || '';
        return {
          url: `${URL_ROUTES.LABELS}/${labelId}`,
          method: labelId ? 'PUT' : 'POST',
          body: labelData,
        };
      },
      invalidatesTags: ['Label'],
    }),

    deleteLabel: builder.mutation<void, string | number>({
      query: (id = '') => {
        return {
          url: `${URL_ROUTES.LABELS}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Label'],
    }),
  }),
});

export const {
  useGetLabelsQuery,
  useGetLabelByIdQuery,
  useDeleteLabelMutation,
  useCreateOrUpdateLabelMutation,
} = labelsApi;
