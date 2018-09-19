import { request } from './rest';

export const login = (data = {}) => request(
  'public/login',
  'POST',
  data,
  {
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    }
  }
);

export const checkUser = () => request('public/checkUser')
