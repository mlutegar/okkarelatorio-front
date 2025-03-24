import React from 'react';
import {BotaoSecundarioStyle} from './Style';

const BotaoSecundario = ({children, onClick}) => {
    return (
        <BotaoSecundarioStyle onClick={onClick}>
            {children}
        </BotaoSecundarioStyle>
    );
};

export default BotaoSecundario;