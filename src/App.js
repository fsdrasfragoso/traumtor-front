import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './presentation/views/HomePage';
import LoginPage from './presentation/views/LoginPage';
import FootballerPage from './presentation/views/FootballerPage';  
import CreateGroupPage from './presentation/views/CreateGroupPage';

import './presentation/styles/main.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/footballer" element={<FootballerPage />} />  
        <Route path="/criar-grupo" element={<CreateGroupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
