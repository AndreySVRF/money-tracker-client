import { FC } from 'react';
import { Navigation, ThemeSwitcher } from './components';

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between p-3">
      <Navigation />
      <ThemeSwitcher />
    </header>
  );
};

export { Header };
