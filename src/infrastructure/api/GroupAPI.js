// src/infrastructure/api/GroupAPI.js
class GroupAPI {
    constructor(baseURL = "http://localhost/api") {
        this.baseURL = baseURL;
    }

    async createGroup(groupData, token) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(groupData),
        };

        try {
            const response = await fetch(`${this.baseURL}/groups`, requestOptions);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Erro ao criar grupo.');
            }

            return result;
        } catch (error) {
            console.error('Erro ao criar grupo:', error.message);
            throw error;
        }
    }

    async getGroups(token) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        };

        try {
            const response = await fetch(`${this.baseURL}/groups`, requestOptions);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Erro ao buscar grupos.');
            }

            return result;
        } catch (error) {
            console.error('Erro ao buscar grupos:', error.message);
            throw error;
        }
    }
}

export default GroupAPI;
