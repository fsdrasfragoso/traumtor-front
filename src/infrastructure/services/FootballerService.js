// src/infrastructure/services/FootballerService.js
import FootballerAPI from '../api/FootballerAPI';
import AuthService from './AuthService';

class FootballerService {
    constructor() {
        this.api = new FootballerAPI();
        this.authService = new AuthService(); // Usar AuthService para gerenciar o token
    }

    async getFootballerData() {
        const token = this.authService.getToken();
        if (!token) {
            throw new Error('Token não encontrado. O usuário não está logado.');
        }
        const result = await this.api.getFootballerData(token);
        return result;
    }
}

export default FootballerService;
