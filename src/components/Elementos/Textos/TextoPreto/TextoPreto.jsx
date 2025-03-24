import React from 'react';
import { historicoBlueContainer } from './Style';

const TextoPreto = ({children, className}) => {
    return (
        <div style={historicoBlueContainer} className={className}>
            {children}
        </div>
    );
};

export default TextoPreto;