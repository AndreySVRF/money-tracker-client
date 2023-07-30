import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CATEGORIES_ROUTE, TRANSACTIONS_ROUTE } from '../../router';

const Navigation: FC = () => {
  return (
    <nav className="flex">
      <ul className="flex gap-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={CATEGORIES_ROUTE}>Categories</NavLink>
        </li>
        <li>
          <NavLink to={TRANSACTIONS_ROUTE}>Transactions</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
