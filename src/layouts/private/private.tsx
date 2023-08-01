import { FC } from 'react';
import { Header } from '../../modules';
import { Outlet } from 'react-router-dom';
import { INavigationItems } from '../../components';
import { CATEGORIES_ROUTE, TRANSACTIONS_ROUTE } from '../../router';

const Private: FC = () => {
  const navigationItems: INavigationItems[] = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Categories',
      path: CATEGORIES_ROUTE
    },
    {
      title: 'Transactions',
      path: TRANSACTIONS_ROUTE
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20 font-base duration-100 dark:bg-slate-900 dark:text-gray-100">
      <Header isAuth={true} navigationItems={navigationItems} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { Private };
