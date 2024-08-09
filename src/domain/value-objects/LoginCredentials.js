// src/domain/value-objects/LoginCredentials.js
class LoginCredentials {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    validate() {
      if (!this.email || !this.password) {
        throw new Error('Email and password must be provided');
      }
    }
  }
  
  export default LoginCredentials;
  