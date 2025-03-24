import React from 'react';
import {StyleText} from './Style';

const Input = ({placeholder = "escreva", type}) => {
    return (
        <StyleText placeholder={placeholder} type={type} />
    );
};

export default Input;