import { FC } from 'react';
import { Logo, Navigation, ThemeSwitcher } from '../../components';

interface IHeaderProps {
  isNavigationShow?: boolean;
}

const Header: FC<IHeaderProps> = ({ isNavigationShow }) => {
  return (
    <header className="flex items-center justify-between p-3">
      <Logo />
      {isNavigationShow && <Navigation />}
      <ThemeSwitcher />
    </header>
  );
};

export { Header };
