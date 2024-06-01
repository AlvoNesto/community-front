import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + 'login', { username, password })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated() {
    const user = this.getCurrentUser();
    return user && user.access_token;
  }
}

export default new AuthService();
