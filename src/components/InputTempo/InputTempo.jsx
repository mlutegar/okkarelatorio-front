import React, { useState, useEffect } from 'react';
import { StyleText } from './Style';
import TextoAzul from "../Elementos/Textos/TextoAzul/TextoAzul";

const InputTempo = ({ onChange, disabled = false, valorInicial = 0 }) => {
    // Calculando horas e minutos a partir do valor inicial (em minutos)
    const [horas, setHoras] = useState(() => {
        return Math.floor(valorInicial / 60).toString();
    });

    const [minutos, setMinutos] = useState(() => {
        return (valorInicial % 60).toString();
    });

    // Atualiza os campos quando valorInicial muda
    useEffect(() => {
        if (valorInicial !== undefined) {
            setHoras(Math.floor(valorInicial / 60).toString());
            setMinutos((valorInicial % 60).toString());
        }
    }, [valorInicial]);

    // Calcula o total de minutos sempre que horas ou minutos mudam
    useEffect(() => {
        const horasNum = parseInt(horas) || 0;
        const minutosNum = parseInt(minutos) || 0;
        const totalMinutos = (horasNum * 60) + minutosNum;

        onChange(totalMinutos);
    }, [horas, minutos, onChange]);

    return (
        <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
            <div style={{ flex: 1 }}>
                <TextoAzul>Horas</TextoAzul>
                <StyleText
                    placeholder="Horas"
                    type="number"
                    min="0"
                    value={horas}
                    onChange={(e) => setHoras(e.target.value)}
                    disabled={disabled}
                />
            </div>
            <div style={{ flex: 1 }}>
                <TextoAzul>Minutos</TextoAzul>
                <StyleText
                    placeholder="Minutos"
                    type="number"
                    min="0"
                    max="59"
                    value={minutos}
                    onChange={(e) => setMinutos(e.target.value)}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default InputTempo;