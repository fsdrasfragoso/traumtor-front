// src/infrastructure/api/ModalityAPI.js
class ModalityAPI {
    constructor(baseURL = "http://localhost/api") {
        this.baseURL = baseURL;
    }

    /**
     * Fetch all modalities.
     * @param {string} token - Authentication token.
     * @returns {Promise<Array>} List of modalities.
     */
    async getAllModalities(token) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        };

        try {
            const response = await fetch(`${this.baseURL}/modality/all`, requestOptions);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Erro ao buscar modalidades.');
            }

            return result.data; // Assume que a lista de modalidades está dentro de `data`
        } catch (error) {
            console.error('Erro ao buscar modalidades:', error.message);
            throw error;
        }
    }

    /**
     * Fetch a specific modality by ID.
     * @param {number} id - ID of the modality.
     * @param {string} token - Authentication token.
     * @returns {Promise<Object>} The modality data.
     */
    async getModalityById(id, token) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        };

        try {
            const response = await fetch(`${this.baseURL}/modality/${id}`, requestOptions);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || `Erro ao buscar a modalidade com ID ${id}.`);
            }

            return result;
        } catch (error) {
            console.error(`Erro ao buscar a modalidade com ID ${id}:`, error.message);
            throw error;
        }
    }
}

export default ModalityAPI;
