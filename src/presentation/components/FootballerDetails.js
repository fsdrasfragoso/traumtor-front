// src/components/FootballerDetails.js
import React from 'react';

const FootballerDetails = ({ footballer }) => {
  return (
    <div className="footballer-details">
      <h2>{footballer.name}</h2>
      <p>Email: {footballer.email}</p>
      <p>Documento: {footballer.document}</p>
      <p>Telefone: {footballer.phone}</p>
      <p>Status: {footballer.status}</p>
      <p>Overall: {footballer.overall}</p>
      <p>Altura: {footballer.height}m</p>
      <p>Peso: {footballer.weight}kg</p>
      <p>Pé dominante: {footballer.dominant_foot}</p>
      <h3>Modalidades</h3>
      <ul>
        {footballer.modalities.map((modality) => (
          <li key={modality.id}>{modality.name} - {modality.player_count} jogadores</li>
        ))}
      </ul>
      <h3>Posições</h3>
      <ul>
        {footballer.positions.map((position) => (
          <li key={position.id}>
            {position.name} - {position.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootballerDetails;
