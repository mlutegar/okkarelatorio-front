import React from 'react';
import {BotaoPrimarioStyle} from './Style';

const BotaoPrimario = ({children, onClick}) => {
    return (
        <BotaoPrimarioStyle onClick={onClick}>
            {children}
        </BotaoPrimarioStyle>
    );
};

export default BotaoPrimario;