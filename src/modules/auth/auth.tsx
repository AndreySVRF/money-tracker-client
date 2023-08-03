import { FC, useEffect, useState } from 'react';
import { LoginForm, RegisterForm } from './components';
import { useLocation, useNavigate } from 'react-router-dom';
import { SIGNUP_ROUTE } from '../../router';

const Auth: FC = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const showRegisterForm = () => {
    setLogin(false);
  };

  const showLoginForm = () => {
    setLogin(true);
    navigate('/');
  };

  useEffect(() => {
    if (pathname.slice(1) === SIGNUP_ROUTE) {
      setLogin(false);
    }
  }, [pathname]);

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6">
      <div className="text-2xl font-bold">
        {isLogin ? 'Log In' : 'Registration'}
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      {isLogin ? (
        <div>
          Don't have an account yet?{' '}
          <button
            className="text-green-600 dark:text-green-500"
            onClick={showRegisterForm}
          >
            Sign up now.
          </button>
        </div>
      ) : (
        <div>
          Do you already have an account?{' '}
          <button
            className="text-green-600 dark:text-green-500"
            onClick={showLoginForm}
          >
            Log In.
          </button>
        </div>
      )}
    </div>
  );
};

export { Auth };
