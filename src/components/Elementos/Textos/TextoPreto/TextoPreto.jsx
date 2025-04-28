import React from 'react';
import { TextoDescritivoStyle } from './Style';

const TextoPreto = ({children, className}) => {
    return (
        <TextoDescritivoStyle className={className}>
            {children}
        </TextoDescritivoStyle>
    );
};

export default TextoPreto;