import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationItems } from './types';

interface INavigationProps {
  navigationItems: INavigationItems[];
}

const Navigation: FC<INavigationProps> = ({ navigationItems }) => {
  const navigationItemsRender = navigationItems.map(({ title, path }) => (
    <li key={path}>
      <NavLink
        className={({ isActive }) =>
          isActive && path !== '/' ? 'text-green-600 dark:text-green-500' : ''
        }
        to={path}
        key={path}
      >
        {title}
      </NavLink>
    </li>
  ));

  return (
    <nav className="flex">
      <ul className="flex gap-10">{navigationItemsRender}</ul>
    </nav>
  );
};

export { Navigation };
