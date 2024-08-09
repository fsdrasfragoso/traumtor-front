import React from 'react';
import { useNavigate } from 'react-router-dom';
import FutsalField from '../views/futsal/FutsalField';
import SocietyField from '../views/society/SocietyField';
import CampoField from '../views/campo/CampoField';
import Header from '../components/Header';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleFieldClick = (fieldType) => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
      <Header />
      <div className="container home-container">
        <h1 className="text-center">Selecione a modalidade que deseja jogar</h1>
        <div className="row justify-content-center fields-container">
          <div className="col-md-4 text-center field-container" onClick={() => handleFieldClick('futsal')}>
            <FutsalField />
            <h3>Futsal</h3>
          </div>
          <div className="col-md-4 text-center field-container" onClick={() => handleFieldClick('society')}>
            <SocietyField />
            <h3>Society</h3>
          </div>
          <div className="col-md-4 text-center field-container" onClick={() => handleFieldClick('full-size')}>
            <CampoField />
            <h3>Campo</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
