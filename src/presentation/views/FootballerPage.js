import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FootballerService from '../../infrastructure/services/FootballerService';
import Modalities from '../components/Modalities';
import Positions from '../components/Positions';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FootballerPage = () => {
    const [footballerData, setFootballerData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFootballerData = async () => {
            try {
                const footballerService = new FootballerService();
                const data = await footballerService.getFootballerData();
                setFootballerData(data);

                localStorage.setItem('userName', data.footballer.name);
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

            {/* Breadcrumb Section */}
            <section className="breadcrumb_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <h2>Dados do Jogador</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footballer Details Section */}
            <section className="feature_part section_padding">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="feature_part_tittle">
                                <h3>Detalhes do Jogador</h3>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="feature_part_content">
                                <p>Nome: {footballerData.footballer.name}</p>
                                <p>Email: {footballerData.footballer.email}</p>
                                <p>Documento: {footballerData.footballer.document}</p>
                                <p>Telefone: {footballerData.footballer.phone}</p>
                                <p>Status: {footballerData.footballer.status}</p>
                                <p>Overall: {footballerData.footballer.overall}</p>
                                <p>Altura: {footballerData.footballer.height} m</p>
                                <p>Peso: {footballerData.footballer.weight} kg</p>
                                <p>Pé dominante: {footballerData.footballer.dominant_foot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modalities Section */}
            <section className="feature_part section_padding">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <div className="feature_part_tittle">
                                <h3>Modalidades</h3>
                            </div>
                            <Modalities modalities={footballerData.modalities} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Positions Section */}
            <section className="feature_part section_padding">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <div className="feature_part_tittle">
                                <h3>Posições</h3>
                            </div>
                            <Positions positions={footballerData.positions} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FootballerPage;
