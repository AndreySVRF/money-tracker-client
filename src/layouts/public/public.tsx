import { FC } from 'react';
import { Header } from '../components/header';

const Public: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-20 font-base duration-100 dark:bg-slate-900 dark:text-gray-100">
      <Header />
      <main>content</main>
    </div>
  );
};

export { Public };
