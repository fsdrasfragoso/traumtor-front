// src/components/FutsalField.js

import React, { useState } from 'react';
//import '../../styles/FutsalField.css';

const formations = {
  '2-2': [
    { id: 1, x: '45%', y: '75%' },  // Goalkeeper
    { id: 4, x: '20%', y: '50%' },  // Defender left
    { id: 3, x: '70%', y: '50%' },  // Defender right
    { id: 9, x: '30%', y: '20%' },  // Forward left
    { id: 11, x: '60%', y: '20%' },  // Forward right
  ]
  
};

const FutsalField = () => {
  const [formation, setFormation] = useState('2-2');

  return (
    <div className="futsal-field">
      {formations[formation].map(player => (
        <div
          key={player.id}
          className="player"
          style={{ left: player.x, top: player.y }}
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

export default FutsalField;
