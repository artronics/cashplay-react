import request from 'utils/request';

export const baseUrl = 'http://localhost:8080/api';
const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const post = function (url, body) {
  const postOpt = {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  };

  return request(`${baseUrl + url}`, postOpt);
};

export { post };

