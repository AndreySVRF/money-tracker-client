import { FC } from 'react';
import {
  INavigationItems,
  Logo,
  Navigation,
  ThemeSwitcher
} from '../../components';

interface IHeaderProps {
  navigationItems?: INavigationItems[];
}

const Header: FC<IHeaderProps> = ({ navigationItems }) => {
  return (
    <header className="flex items-center justify-between p-3">
      <Logo />
      {!!navigationItems?.length && (
        <Navigation navigationItems={navigationItems} />
      )}
      <ThemeSwitcher />
    </header>
  );
};

export { Header };
