import { rest } from './rest';

export const checkUser = (data = {}) => rest.post('api/users/checkuser', data);
export const login = (data = {}) => rest.post(
  'api/users/login',
  data
);
export const createUser = data => rest.post('api/users/register', data);
export const updateUser = data => rest.put('api/users/update', data);
