// src/infrastructure/api/FootballerAPI.js
class FootballerAPI {
    constructor(baseURL = "http://localhost/api") {
        this.baseURL = baseURL;
    }

    async getFootballerData(token) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer-when-downgrade'
        };

        try {
            const response = await fetch(`${this.baseURL}/footballer/data-logged`, requestOptions);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Erro ao buscar dados do futebolista. Status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Erro ao buscar dados do futebolista:', error.message);
            throw error;
        }
    }
}

export default FootballerAPI;
