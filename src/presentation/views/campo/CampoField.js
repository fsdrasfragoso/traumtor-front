// src/components/CampoField.js

import React, { useState } from 'react';
//import '../../styles/CampoField.css';

const formations = {
  '4-4-2': [
    { id: 1, x: '5%', y: '50%' },    // Goalkeeper
    { id: 2, x: '20%', y: '13%' },   // Defender left
    { id: 3, x: '14%', y: '38%' },   // Defender center left
    { id: 4, x: '14%', y: '60%' },   // Defender center right
    { id: 6, x: '20%', y: '84%' },   // Defender right
    { id: 7, x: '61%', y: '30%' },   // Midfielder left
    { id: 5, x: '34%', y: '37%' },   // Midfielder center left
    { id: 8, x: '40%', y: '63%' },   // Midfielder center right
    { id: 10, x: '61%', y: '74%' },   // Midfielder right
    { id: 9, x: '80%', y: '40%' },  // Forward left
    { id: 11, x: '80%', y: '60%' },  // Forward right
  ]
};

const CampoField = () => {
  const [formation, setFormation] = useState('4-4-2');

  return (
    <div className="campo-field">
      {formations[formation].map(player => (
        <div
          key={player.id}
          className="player-campo"
          style={{ bottom: player.x, left: player.y }}
        >
          {player.id}
        </div>
      ))}
      <div className="formation-selector">
        {/* Add more buttons for different formations */}
      </div>
    </div>
  );
};

export default CampoField;
