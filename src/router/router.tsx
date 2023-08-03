import { Navigate, Route } from 'react-router-dom';
import { Private, Public } from '../layouts';
import { Auth, Categories, Home, Transactions } from '../pages';
import {
  CATEGORIES_ROUTE,
  SIGNUP_ROUTE,
  TRANSACTIONS_ROUTE
} from './routes.ts';

const privateRoutes = (
  <Route element={<Private />}>
    <Route element={<Home />} path="/" index />
    <Route element={<Categories />} path={CATEGORIES_ROUTE} />
    <Route element={<Transactions />} path={TRANSACTIONS_ROUTE} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

const publicRoutes = (
  <Route element={<Public />}>
    <Route element={<Auth />} path="/" />
    <Route element={<Auth />} path={SIGNUP_ROUTE} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

export { privateRoutes, publicRoutes };
