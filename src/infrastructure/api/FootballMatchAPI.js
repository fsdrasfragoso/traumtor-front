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
            },
        };

        const response = await fetch("http://localhost/api/footballer/data-logged", requestOptions);
        const result = await response.json();
        return result;
    }
}

export default FootballMatchAPI;
