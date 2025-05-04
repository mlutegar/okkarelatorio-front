import styled from "styled-components"

export const CardRelatorioPresidenteStyle = styled.div`
    width: 22.875rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #D9D9D9;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0;

    .header {
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem 0 1rem;
        align-items: center;
    }

    .data {
        border-radius: 1.25rem;
        background: #063D86;
        width: 5.875rem;
        height: 1.5rem;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modificado {
        text-decoration: line-through;
    }
`
