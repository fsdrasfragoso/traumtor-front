// src/infrastructure/api/AuthAPI.js
class AuthAPI {
    constructor(baseURL = "http://localhost/api") {
        this.baseURL = baseURL;
    }

    async login(credentials) {
        const formdata = new FormData();
        formdata.append("email", credentials.email);
        formdata.append("password", credentials.password);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };

        try {
            const response = await fetch(`${this.baseURL}/auth/login`, requestOptions);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Erro ao fazer login.');
            }

            return result;
        } catch (error) {
            console.error('Erro ao realizar login:', error.message);
            throw error;
        }
    }
}

export default AuthAPI;
