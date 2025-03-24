import styled from "styled-components"

export const TextAreaStyle = styled.textarea`
    width: 85%;
    min-height: 200px;
    border: 2px solid #063D86;
    border-radius: 1rem;
    color: #3C3C3C;
    resize: none;
    outline: none;
    margin-top: 1rem;

    color: rgba(0, 0, 0, 0.50);
    font-family: "TTChocTest";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: none;
    padding: 1rem;
    
    &:focus {
        border: 2px solid #F5AC00;
    }
`
