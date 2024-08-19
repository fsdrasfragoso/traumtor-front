// src/infrastructure/services/AuthService.js
import AuthAPI from '../api/AuthAPI';

class AuthService {
    constructor() {
        this.api = new AuthAPI();
    }

    async login(credentials) {
        const result = await this.api.login(credentials);
        if (result.access_token) {
            localStorage.setItem('accessToken', result.access_token);
        }
        return result;
    }

    getToken() {
        return localStorage.getItem('accessToken');
    }

    logout() {
        localStorage.removeItem('accessToken');
    }
}

export default AuthService;
