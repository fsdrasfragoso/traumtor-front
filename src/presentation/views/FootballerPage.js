import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoginSection from '../components/LoginSection';
import AuthenticationService from '../../domain/services/AuthenticationService';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Hook para redirecionamento

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authService = new AuthenticationService();

        try {
           
            const footballer = await authService.login(email, password);
            
            alert(footballer);
            console.log('Login realizado com sucesso', footballer);
            navigate('/footballer');  // Redireciona para a página do futebolista
        } catch (error) {
            console.error('Falha no login', error.message);
        }
    };

    return (
        <div>
            <Header />
            <LoginSection 
                onSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </div>
    );
};

export default LoginPage;
