// src/application/services/AuthenticationService.js
import AuthService from '../../infrastructure/services/AuthService';
import LoginCredentials from '../../domain/value-objects/LoginCredentials';

class AuthenticationService {
  constructor() {
    this.authService = new AuthService();
  }

  async login(email, password) {
    const credentials = new LoginCredentials(email, password);
    credentials.validate();

    const result = await this.authService.login(credentials);
    
    if (result && result.access_token) {
      localStorage.setItem('token', result.access_token);
      return result;
    } else {
      throw new Error('Invalid login credentials');
    }
  }
}

export default AuthenticationService;
