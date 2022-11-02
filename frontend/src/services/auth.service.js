/* eslint-disable camelcase */

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/users/';

const register = (username, email, password, password_confirmation) => axios.post(`${API_URL}`, {
  username,
  email,
  password,
  password_confirmation,
});

const login = (username, password) => axios

  .post(`${API_URL}`, {
    username,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
