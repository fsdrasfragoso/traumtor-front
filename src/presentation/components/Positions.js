import React from 'react';

const Positions = ({ positions }) => {
    return (
        <ul>
            {positions.map(position => (
                <li key={position.id}>
                    <p>Nome: {position.name}</p>
                    <p>Descrição: {position.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default Positions;
