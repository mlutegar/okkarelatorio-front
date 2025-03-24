import styled from "styled-components"

export const BotoesCheckStyle = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    
    svg{
        cursor: pointer;
        transition: 0.3s;
    }
    
    svg:hover{
        transform: scale(1.1);
    }
    
    svg:active{
        transform: scale(0.9);
    }
`
