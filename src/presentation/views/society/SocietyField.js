// src/components/SocityField.js

import React, { useState } from 'react';
//import '../../styles/SocityField.css';

const formations = {
  '3-2-1': [
    { id: 1, x: '10%', y: '50%' },    // Goalkeeper
    { id: 2, x: '30%', y: '30%' },    // Defender left
    { id: 3, x: '30%', y: '50%' },    // Defender center
    { id: 4, x: '30%', y: '70%' },    // Defender right
    { id: 5, x: '60%', y: '40%' },    // Midfielder left
    { id: 6, x: '60%', y: '60%' },    // Midfielder right
    { id: 7, x: '80%', y: '50%' },    // Forward center
  ],
  // Additional formations can be added here
};

const SocityField = () => {
  const [formation, setFormation] = useState('3-2-1');

  return (
    <div className="socity-field">
      {formations[formation].map(player => (
        <div
          key={player.id}
          className="player"
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

export default SocityField;
