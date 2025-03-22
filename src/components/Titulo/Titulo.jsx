import React from 'react';
import { historicoContainer } from './Style';

const Titulo = ({titulo}) => {
    return (
        <div style={historicoContainer}>
            {titulo}
        </div>
    );
};

export default Titulo;