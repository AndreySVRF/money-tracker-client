import axios from 'axios';
import { getFromLocalStorage, TOKEN_KEY } from '../utils';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${getFromLocalStorage(TOKEN_KEY)}` || ''
  }
});

export { instance };
