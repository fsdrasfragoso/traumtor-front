import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FootballerService from '../../infrastructure/services/FootballerService';
import Modalities from '../components/Modalities';
import Positions from '../components/Positions';
import Header from '../components/Header';

const FootballerPage = () => {
    const [footballerData, setFootballerData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFootballerData = async () => {
            try {
                const footballerService = new FootballerService();
                const data = await footballerService.getFootballerData();
                setFootballerData(data);
            } catch (error) {
                console.error('Erro ao buscar dados do futebolista:', error);
                navigate('/login');  // Redireciona para a página de login se houver erro
            }
        };

        fetchFootballerData();
    }, [navigate]);

    if (!footballerData) {
        return <div>Carregando...</div>;
    }

    return (
     
        <div>
            <Header />
            <h1>{footballerData.footballer.name}</h1>
            <p>Email: {footballerData.footballer.email}</p>
            <p>Documento: {footballerData.footballer.document}</p>
            <p>Telefone: {footballerData.footballer.phone}</p>
            <p>Status: {footballerData.footballer.status}</p>
            <p>Overall: {footballerData.footballer.overall}</p>
            <p>Altura: {footballerData.footballer.height} m</p>
            <p>Peso: {footballerData.footballer.weight} kg</p>
            <p>Pé dominante: {footballerData.footballer.dominant_foot}</p>

            <h2>Modalidades</h2>
            <Modalities modalities={footballerData.modalities} />

            <h2>Posições</h2>
            <Positions positions={footballerData.positions} />
        </div>
    );
};

export default FootballerPage;
