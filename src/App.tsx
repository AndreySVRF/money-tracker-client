import { BrowserRouter, Routes } from 'react-router-dom';
import { Theme, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './components/theme-switcher/hooks';
import { useAuth } from './modules/auth/hooks';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { errorHandler, getFromLocalStorage, TOKEN_KEY } from './utils';
import { AuthService, login, logout } from './modules';
import { PageLoader } from './components';
import { privateRoutes, publicRoutes } from './router';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isAuth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getFromLocalStorage(TOKEN_KEY);

      if (token) {
        try {
          const data = await AuthService.getProfile();
          data ? dispatch(login(data)) : logout();
        } catch (error) {
          errorHandler(error);
        }
      }

      setLoading(false);
    };

    checkAuth();
  }, [dispatch]);

  return (
    <BrowserRouter>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Routes>{isAuth ? privateRoutes : publicRoutes}</Routes>
      )}
      <ToastContainer autoClose={3000} theme={theme as Theme} />
    </BrowserRouter>
  );
};

export default App;
