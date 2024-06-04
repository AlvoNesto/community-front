import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

class AuthService {
  async login(username, password) {
    const response = await axios.post(API_URL + 'login', { username, password });
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  async isAuthenticated() {
    const user = this.getCurrentUser();
    if (user && user.access_token) {
      try {
        await axios.get(API_URL + 'validate-token', {
          headers: {
            Authorization: `Bearer ${user.access_token}`
          }
        });
        return true;
      } catch {
        this.logout();
        return false;
      }
    }
    return false;
  }
}

export default new AuthService();
