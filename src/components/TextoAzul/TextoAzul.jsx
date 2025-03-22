import React from 'react';
import { historicoBlueContainer } from './Style';

const TextoAzul = ({children}) => {
    return (
        <div style={historicoBlueContainer}>
            {children}
        </div>
    );
};

export default TextoAzul;