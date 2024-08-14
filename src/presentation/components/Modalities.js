import React from 'react';

const Modalities = ({ modalities }) => {
    return (
        <ul>
            {modalities.map(modality => (
                <li key={modality.id}>
                    <p>Nome: {modality.name}</p>
                    <p>Quantidade de Jogadores: {modality.player_count}</p>
                </li>
            ))}
        </ul>
    );
};

export default Modalities;
