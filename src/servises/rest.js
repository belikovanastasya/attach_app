import { setAuthToken } from "./setAuthToken";

const BASE_URL = 'http://localhost:3000/';

export const request = (url, method = 'GET', body, options) => {
  const fetchOpts = {
    method,
    body: JSON.stringify(body)
  };
  Object.assign(fetchOpts, options);

  return fetch(`${BASE_URL}${url}`, fetchOpts)
    .then(response => response.json())
    .then((data) => {
      if (data.error) {
        return Promise.reject(data.error);
      }
      return Promise.resolve(data);
    });
};

export const rest = {
  get(url) {
    return request(url);
  },
  post(url, body) {
    const options = {
      headers: setAuthToken(localStorage.jwtToken)
    };
    return request(url, 'POST', body, options);
  },
  put(url, body) {
    const options = {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    };
    return request(url, 'PUT', body, options);
  },
  delete(url) {
    return request(url, 'DELETE');
  },
};
