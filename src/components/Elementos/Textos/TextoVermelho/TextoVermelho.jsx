import React from 'react';
import { historicoBlueContainer } from './Style';

const TextoVermelho = ({children}) => {
    return (
        <div style={historicoBlueContainer}>
            {children}
        </div>
    );
};

export default TextoVermelho;