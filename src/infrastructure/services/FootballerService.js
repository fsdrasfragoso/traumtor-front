// src/infrastructure/services/FootballerService.js
import FootballMatchAPI from '../api/FootballMatchAPI';

class FootballerService {
    constructor() {
        this.api = new FootballMatchAPI();
    }

    async login(credentials) {
        const result = await this.api.login(credentials);
        if (result.access_token) {
            localStorage.setItem('accessToken', result.access_token);
        }
        return result;
    }

    async getFootballerData() {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('Token não encontrado. O usuário não está logado.');
        }
        const result = await this.api.getFootballerData(token);
        return result;
    }
}

export default FootballerService;
