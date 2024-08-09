// src/application/services/AuthenticationService.js
import FootballerService from '../../infrastructure/services/FootballerService'; // Assuming this is the correct service
import LoginCredentials from '../../domain/value-objects/LoginCredentials';

class AuthenticationService {
  constructor() {
    this.footballerService = new FootballerService();
  }

  async login(email, password) {
    const credentials = new LoginCredentials(email, password);
    credentials.validate();

    const footballer = await this.footballerService.authenticate(credentials);
    
    if (footballer) {
      // Store the token in localStorage or cookies based on your needs
      localStorage.setItem('token', footballer.token);
      return footballer;
    } else {
      throw new Error('Invalid login credentials');
    }
  }
}

export default AuthenticationService;
