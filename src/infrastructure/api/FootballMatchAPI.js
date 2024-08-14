// src/infrastructure/api/FootballMatchAPI.js
class FootballMatchAPI {
    async login(credentials) {
        const formdata = new FormData();
        formdata.append("email", credentials.email);
        formdata.append("password", credentials.password);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };

        const response = await fetch("http://localhost/api/auth/login", requestOptions);
        const result = await response.json();
        return result;
    }

    async getFootballerData(token) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'  // Certifique-se de que o cabeçalho Content-Type está definido corretamente
            },           
            referrerPolicy: 'no-referrer-when-downgrade'
        };
    
        try {
            const response = await fetch("http://localhost/api/footballer/data-logged", requestOptions);
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Erro ao buscar dados do futebolista. Status: ${response.status}`);
            }
    
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Erro na requisição:', error.message);
            throw error;
        }
    }
    
    
    
}

export default FootballMatchAPI;
