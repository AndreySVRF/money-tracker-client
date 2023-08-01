import { FC } from 'react';
import {
  INavigationItems,
  Logo,
  Navigation,
  ThemeSwitcher
} from '../../components';
import { LogOutIcon } from '../../assets';

interface IHeaderProps {
  isAuth?: boolean;
  navigationItems?: INavigationItems[];
}

const Header: FC<IHeaderProps> = ({ isAuth, navigationItems }) => {
  return (
    <header className="flex items-center justify-between p-3">
      <Logo />

      {!!navigationItems?.length && (
        <Navigation navigationItems={navigationItems} />
      )}

      <div className="flex items-center gap-6 ">
        <ThemeSwitcher />

        {isAuth && (
          <button className="btn">
            <LogOutIcon />
            <span>Log Out</span>
          </button>
        )}
      </div>
    </header>
  );
};

export { Header };
