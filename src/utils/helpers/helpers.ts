import { Error } from '../types';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { DATE_AND_TIME_FORMAT } from '../consts';

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

const getDateAndTime = (date: string): string => {
  return format(new Date(date), DATE_AND_TIME_FORMAT);
};

export {
  getFromLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
  errorHandler,
  getDateAndTime
};
