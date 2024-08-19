// src/domain/services/GroupService.js
import GroupAPI from '../../infrastructure/api/GroupAPI';
import AuthService from './AuthService';

class GroupService {
    constructor() {
        this.api = new GroupAPI();
        this.authService = new AuthService(); // Usar AuthService para gerenciar o token
    }

    async createGroup(groupData) {
        const token = this.authService.getToken();
        if (!token) {
            throw new Error('Token não encontrado. O usuário não está logado.');
        }

        const result = await this.api.createGroup(groupData, token);
        return result;
    }

    async getGroups() {
        const token = this.authService.getToken();
        if (!token) {
            throw new Error('Token não encontrado. O usuário não está logado.');
        }

        const result = await this.api.getGroups(token);
        return result;
    }
}

export default GroupService;
