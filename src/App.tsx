import { BrowserRouter, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';
import { Theme, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './components/theme-switcher/hooks';
import { useAuth } from './modules/auth/hooks';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { errorHandler, getFromLocalStorage, TOKEN_KEY } from './utils';
import { AuthService, login, logout } from './modules';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const isAuth = useAuth();
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const token = getFromLocalStorage(TOKEN_KEY);

    try {
      if (token) {
        const data = await AuthService.getProfile();

        if (data) {
          dispatch(login(data));
        } else {
          logout();
        }
      }
    } catch (error) {
      errorHandler(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Routes>{isAuth ? privateRoutes : publicRoutes}</Routes>
      )}
      <ToastContainer autoClose={3000} theme={theme as Theme} />{' '}
    </BrowserRouter>
  );
};

export default App;
