// Style.js
import styled from "styled-components";

export const textContainer = {
    width: '18.6875rem',
    height: '2.6875rem',
    flexShrink: 0,

    color: 'rgba(0, 0, 0, 0.50)',
    fontFamily: '"TTChocTest"',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
};

export const historicoContainer = {
    display: 'flex',
    width: '11.25rem',
    height: '2.6875rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,

    color: '#000',
    fontFamily: '"TTChocTest"',
    fontSize: '2.25rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textTransform: 'uppercase',
};

export const historicoBlueContainer = {
    display: 'flex',
    width: '4.125rem',
    height: '0.875rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,

    color: '#063D86',
    fontFamily: '"TTChocTest"',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
};

export const BotaoPrimarioStyle = styled.button`
    width: 15.25rem;
    height: 2.1875rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #063D86;
    border: none;

    color: #FFBD59;
    text-align: center;
    font-family: "TTChocTest";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    /* Adicionais para melhorar a aparência e usabilidade do botão */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #064aa4;
    }
    
    &:active {
        background: #063D86;
    }
    
    &:disabled {
        background: #063D8680;
        color: #FFBD5980;
        cursor: not-allowed;
    }
`;