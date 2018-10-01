import { rest } from './rest';


export const checkUser = () => rest.get('public/checkUser');
export const login = (data = {}) => rest.post(
  'public/login',
  data
);
export const logout = () => rest.get('logout');
export const createUser = (data) => rest.post('public/user', data);
export const updateUser = () => rest.put('user', data);
