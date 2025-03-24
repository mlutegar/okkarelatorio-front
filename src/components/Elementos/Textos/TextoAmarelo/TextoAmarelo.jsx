import React from 'react';
import { historicoBlueContainer } from './Style';

const TextoAmarelo = ({children}) => {
    return (
        <div style={historicoBlueContainer}>
            {children}
        </div>
    );
};

export default TextoAmarelo;