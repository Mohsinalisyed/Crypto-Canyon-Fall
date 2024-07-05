import React from 'react';
import { Container } from '../lib';
import { useLocation } from 'react-router-dom';

const ViewGame = () => {
    // Retrieve location and state using useLocation hook
    const location = useLocation();
    const { item } = location.state;

    return (
        <Container>
            <div>
                <h2>{item.name}</h2>
                <img src={item.logo} alt={item.name} style={{ width: '200px', borderRadius: '8px' }} />
                <p>Additional details about the game...</p>
            </div>
        </Container>
    );
};

export default ViewGame;
