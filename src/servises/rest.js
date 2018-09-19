const BASE_URL = 'http://localhost:8086/';

export const request = (url, method = 'GET', body, options) => { 
  const fetchOpts = {
    method: method,
    credentials: 'include',
    body: JSON.stringify(body)
  };
  Object.assign(fetchOpts, options)

  return fetch(`${BASE_URL}${url}`, fetchOpts)
  .then(data => data.json())
}
