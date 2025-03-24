import React from 'react';
import {BotaoPrimarioStyle} from './Style';

const BotaoPrimario = ({children, onClick, disabled}) => {
    return (
        <BotaoPrimarioStyle onClick={onClick} disabled={disabled}>
            {children}
        </BotaoPrimarioStyle>
    );
};

export default BotaoPrimario;