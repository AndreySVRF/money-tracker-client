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
import { AuthService } from '../auth';
import { toast } from 'react-toastify';
import { Button, ButtonVariant } from '../../ui';
import { resetStore } from '../../store';

interface IHeaderProps {
  navigationItems?: INavigationItems[];
}

const Header: FC<IHeaderProps> = ({ navigationItems }) => {
  const isAuth = useAuth();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    resetStore(dispatch);
    AuthService.logout();
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
          <Button variant={ButtonVariant.Secondary} onClick={logoutHandler}>
            <LogOutIcon />
            <span>Log Out</span>
          </Button>
        )}
      </div>
    </header>
  );
};

export { Header };
