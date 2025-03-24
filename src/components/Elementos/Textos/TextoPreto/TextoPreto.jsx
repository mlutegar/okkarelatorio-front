import React from 'react';
import { historicoBlueContainer } from './Style';

const TextoPreto = ({children}) => {
    return (
        <div style={historicoBlueContainer}>
            {children}
        </div>
    );
};

export default TextoPreto;