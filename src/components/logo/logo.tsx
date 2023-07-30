import { FC } from 'react';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  return (
    <div className="text-lg font-bold text-slate-700 dark:text-slate-200">
      <Link to="/">Money Tracker</Link>
    </div>
  );
};

export { Logo };
