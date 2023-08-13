import { FC, useEffect, useState } from 'react';
import { LoginForm, RegisterForm } from './components';
import { useLocation, useNavigate } from 'react-router-dom';
import { SIGNUP_ROUTE } from '../../router';
import { ILoginForm, IRegisterForm } from './types';
import { AuthService } from './services';
import { toast } from 'react-toastify';
import { errorHandler, setToLocalStorage, TOKEN_KEY } from '../../utils';
import { useDispatch } from 'react-redux';
import { login } from './slices';

const Auth: FC = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleRegistration = async (userData: IRegisterForm) => {
    try {
      const data = await AuthService.registrations(userData);

      if (data) {
        toast.success('Account has been created.');
        setLogin(true);
      }
    } catch (e) {
      errorHandler(e);
    }
  };

  const handleLogin = async (userData: ILoginForm) => {
    try {
      const data = await AuthService.login(userData);

      if (data) {
        setToLocalStorage(TOKEN_KEY, data.token);
        dispatch(login(data));
        toast.success('Login successful.');
      }
    } catch (e) {
      errorHandler(e);
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6">
      <div className="text-2xl font-bold">
        {isLogin ? 'Log In' : 'Registration'}
      </div>
      {isLogin ? (
        <LoginForm onSubmit={handleLogin} />
      ) : (
        <RegisterForm onSubmit={handleRegistration} />
      )}
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
