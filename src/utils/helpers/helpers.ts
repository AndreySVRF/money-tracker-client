import { Error } from '../types';
import { toast } from 'react-toastify';

const getFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key) || null;
};

const setToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

const errorHandler = (e: unknown): void => {
  const error = e as Error;
  const textError = String(error.response?.data.message);

  toast(textError, { type: 'error' });

  console.error(textError);
};

export {
  getFromLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
  errorHandler
};
