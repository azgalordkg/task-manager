import { useDispatch } from 'react-redux';

import { TOKEN } from '@/constants';
import { resetUserInfo } from '@/store/apis/auth';
import { Storage } from '@/utils';

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    await Storage.removeData(TOKEN);
    dispatch(resetUserInfo());
  };

  return { logout };
};
