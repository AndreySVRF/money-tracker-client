import { Loader } from '../../ui';

const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 duration-100 dark:bg-slate-900">
      <Loader text="Loading..." />
    </div>
  );
};

export { PageLoader };
