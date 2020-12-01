import api from './api';

const login = (user) => {
  return api.post('/auth/login', user)
      .then((response) => response.data)
      .catch((error) => error.response.data);
}

const register = (user) => {
  return api.post('/auth/register', user)
      .then((response) => response.data)
      .catch((error) => error.response.data);
}

export default {
  login,
  register
}
