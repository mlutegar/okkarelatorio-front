import styled from 'styled-components';

const StyleText = styled.input`
    width: 90%;
    height: 2.6875rem;
    flex-shrink: 0;

    color: rgba(0, 0, 0, 0.50);
    font-family: "TT Chocolates Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: none;
    border: none;
    border-bottom: 2px solid #063D86;
    padding: 0;

    &:focus{
        outline: none;
        border-bottom: 2px solid #F5AC00;
    }
`;

export {StyleText};