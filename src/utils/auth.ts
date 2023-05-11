import { TOKEN } from '@/constants';
import { ServerError } from '@/types';
import { Storage } from '@/utils/storage';

export const prepareHeaders = async (headers: Headers) => {
  const token = await Storage.getData(TOKEN);

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  return headers;
};

export const getErrorMessage = (...errors: ServerError[]) => {
  const message = errors.find(error => error?.data?.message)?.data?.message;

  return message || 'SOMETHING_WENT_WRONG';
};
