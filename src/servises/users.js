import { rest } from './rest';


export const checkUser = () => rest.get('api/users/me');
export const login = (data = {}) => rest.post(
  'public/login',
  data
);
export const logout = () => rest.get('logout');
export const createUser = (data) => rest.post('api/users/register', data);
export const updateUser = () => rest.put('user', data);
