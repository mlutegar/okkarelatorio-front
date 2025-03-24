import styled from "styled-components";

export const BotaoSecundarioStyle = styled.button`
  width: 15.25rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #FFBD59;
  border: none;

  color: #063D86;
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
        background: #F5AC00;
    }
`;