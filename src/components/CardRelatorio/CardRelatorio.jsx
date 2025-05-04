import { CardRelatorioStyle } from "./Style";
import TextoAzul from "../Elementos/Textos/TextoAzul/TextoAzul";
import TextoPreto from "../Elementos/Textos/TextoPreto/TextoPreto";
import TextoAmarelo from "../Elementos/Textos/TextoAmarelo/TextoAmarelo";
import {useEffect} from "react";

const CardRelatorio = ({onClick, colaborador, data, topico, minutos}) => {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    const retornarNomeComNoMaximo15Caracteres = (nome) => {
        if (nome.length > 15) {
            return nome.substring(0, 15) + "...";
        }
        return nome;
    }

    const retornaDoisPrimeirosNomes = (nome) => {
        const nomes = nome.split(" ");
        if (nomes.length > 2) {
            return `${nomes[0]} ${nomes[1]}`;
        }
        return nome;
    }

    return (
        <CardRelatorioStyle onClick={onClick}>
            <div className={'header'}>
                <TextoAzul>
                    {retornaDoisPrimeirosNomes(colaborador)}
                </TextoAzul>
                <div className={"data"}>
                    <TextoAmarelo>
                        {data}
                    </TextoAmarelo>
                </div>
            </div>

            <div style={{padding: "0 1rem"}}>
                <TextoPreto>
                    {retornarNomeComNoMaximo15Caracteres(topico)} - {horas}h {minutosRestantes}m
                </TextoPreto>

            </div>
            </CardRelatorioStyle>
    );
}

export default CardRelatorio;