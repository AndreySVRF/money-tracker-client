import { BrowserRouter, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';

const App = () => {
  const isAuth = true;

  return (
    <BrowserRouter>
      <Routes>{isAuth ? privateRoutes : publicRoutes}</Routes>
    </BrowserRouter>
  );
};

export default App;
