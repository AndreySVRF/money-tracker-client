import { FC } from 'react';
import { Header } from '../../modules';
import { Outlet } from 'react-router-dom';

const Private: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-20 font-base duration-100 dark:bg-slate-900 dark:text-gray-100">
      <Header isNavigationShow={true} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { Private };
