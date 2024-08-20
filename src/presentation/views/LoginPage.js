// src/presentation/views/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoginSection from '../components/LoginSection';
import AuthenticationService from '../../domain/services/AuthenticationService';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Para redirecionar

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authService = new AuthenticationService();
    
    try {
      const footballer = await authService.login(email, password);
      console.log('Login realizado com sucesso', footballer);
        
      // Armazene o token (por exemplo, no localStorage)
      localStorage.setItem('accessToken', footballer.access_token);

      // Redireciona para a página do futebolista
      navigate('/footballer');
    } catch (error) {
      console.error('Falha no login', error.message);
      // Exibir mensagem de erro para o usuário
      alert('Falha no login '+error.message);
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
      <Footer/>
    </div>
  );
};

export default LoginPage;
