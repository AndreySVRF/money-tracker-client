import { FC } from 'react';
import {
  INavigationItems,
  Logo,
  Navigation,
  ThemeSwitcher
} from '../../components';
import { LogOutIcon } from '../../assets';
import { useAuth } from '../auth/hooks';
import { useDispatch } from 'react-redux';
import { logout } from '../auth';
import { removeFromLocalStorage, TOKEN_KEY } from '../../utils';
import { toast } from 'react-toastify';

interface IHeaderProps {
  navigationItems?: INavigationItems[];
}

const Header: FC<IHeaderProps> = ({ navigationItems }) => {
  const isAuth = useAuth();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    removeFromLocalStorage(TOKEN_KEY);
    toast.success('You log out.');
  };

  return (
    <header className="flex items-center justify-between p-3">
      <Logo />

      {!!navigationItems?.length && (
        <Navigation navigationItems={navigationItems} />
      )}

      <div className="flex items-center gap-6 ">
        <ThemeSwitcher />

        {isAuth && (
          <button className="btn" onClick={logoutHandler}>
            <LogOutIcon />
            <span>Log Out</span>
          </button>
        )}
      </div>
    </header>
  );
};

export { Header };
