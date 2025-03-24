import React from 'react';
import {StyleText} from './Style';

const Input = ({placeholder = "escreva", type, disabled, value, onChange}) => {
    return (
        <StyleText placeholder={placeholder} type={type} disabled={disabled} value={value} onChange={onChange}/>
    );
};

export default Input;