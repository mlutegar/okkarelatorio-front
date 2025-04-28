import {CardRelatorioPresidenteStyle} from "./Style";
import TextoAzul from "../Elementos/Textos/TextoAzul/TextoAzul";
import TextoPreto from "../Elementos/Textos/TextoPreto/TextoPreto";
import TextoAmarelo from "../Elementos/Textos/TextoAmarelo/TextoAmarelo";
import TextoVermelho from "../Elementos/Textos/TextoVermelho/TextoVermelho";
import {Lapis} from "../Icones/Lapis";
import {useEffect, useState} from "react";

const CardRelatorioPresidente = ({
                                     onClick,
                                     colaborador,
                                     data,
                                     topico,
                                     topico_modificado,
                                     minutos,
                                     minutos_modificada,
                                     diretor
                                 }) => {
    const [temModificacao, setTemModificacao] = useState(false);
    const [topico_alterado, setTopicoAlterado] = useState(topico_modificado);

    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    let horasAlterado = Math.floor(minutos_modificada / 60);
    let minutosRestantesAlterado = minutos_modificada % 60;

    useEffect(() => {
        if (topico_modificado === "" && minutos_modificada === "") {
            return;
        }

        if (topico_modificado === "") {
            setTopicoAlterado(topico);
        }

        if (minutos_modificada === "") {
            horasAlterado = Math.floor(minutos_modificada / 60);
            minutosRestantesAlterado = minutos_modificada % 60;
        }

        setTemModificacao(true);
    }, []);

    const retornarNomeComNoMaximo15Caracteres = (nome) => {
        if (nome.length > 15) {
            return nome.substring(0, 15) + "...";
        }
        return nome;
    }

    return (
        <CardRelatorioPresidenteStyle onClick={onClick}>
            <div style={{display: "flex", justifyContent: "space-between", padding: "1rem 1rem 0 1rem"}}>

                <TextoAzul>
                    {colaborador}
                </TextoAzul>
                <div className={"data"}>
                    <TextoAmarelo>
                        {data}
                    </TextoAmarelo>
                </div>
            </div>


            <div style={{padding: "0 1rem", display: "flex"}}>
                <div
                    style={{display: "flex", flexDirection: "column", gap: "0.5rem", width: "15rem"}}
                >
                    <TextoPreto className={temModificacao ? "modificado" : ""}>
                        {retornarNomeComNoMaximo15Caracteres(topico)} - {horas}h {minutosRestantes}m
                    </TextoPreto>
                    {temModificacao &&
                        <TextoVermelho>
                            {retornarNomeComNoMaximo15Caracteres(topico_alterado)} - {horasAlterado}h {minutosRestantesAlterado}m
                        </TextoVermelho>
                    }

                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Lapis/>
                    <TextoAzul>
                        {diretor}
                    </TextoAzul>
                </div>
            </div>


        </CardRelatorioPresidenteStyle>
    );
}

export default CardRelatorioPresidente;