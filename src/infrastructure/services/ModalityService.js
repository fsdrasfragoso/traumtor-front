// src/infrastructure/services/ModalityService.js
import ModalityAPI from '../api/ModalityAPI';
import AuthService from './AuthService';

class ModalityService {
    constructor() {
        this.api = new ModalityAPI();
        this.authService = new AuthService(); 
    }

    /**
     * Fetch all modalities.
     * @returns {Promise<Array>} List of modalities.
     */
    async getAllModalities() {
        const token = this.authService.getToken();
        if (!token) {
            throw new Error('Token não encontrado. O usuário não está logado.');
        }

        const result = await this.api.getAllModalities(token);
        return result;
    }

    /**
     * Fetch a specific modality by ID.
     * @param {number} id - ID of the modality.
     * @returns {Promise<Object>} The modality data.
     */
    async getModalityById(id) {
        const token = this.authService.getToken();
        if (!token) {
            throw new Error('Token não encontrado. O usuário não está logado.');
        }

        const result = await this.api.getModalityById(id, token);
        return result;
    }
}

export default ModalityService;
