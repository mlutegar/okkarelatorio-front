import React from 'react';
import {BotaoCancelarStyle} from './Style';

const BotaoCancelar = ({children, onClick}) => {
    return (
        <BotaoCancelarStyle onClick={onClick}>
            {children}
        </BotaoCancelarStyle>
    );
};

export default BotaoCancelar;