import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

const useAuth = (): boolean => {
  return useSelector((state: RootState) => state.user.isAuth);
};

export { useAuth };
