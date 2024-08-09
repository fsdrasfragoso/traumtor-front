import React from 'react';

const FootballField = ({ fieldType, onClick }) => {
  return (
    <div className="football-field" onClick={onClick}>
      <img src={`path-to-${fieldType.toLowerCase()}.png`} alt={`${fieldType} field`} />
      <h3>{fieldType}</h3>
    </div>
  );
};

export default FootballField;
