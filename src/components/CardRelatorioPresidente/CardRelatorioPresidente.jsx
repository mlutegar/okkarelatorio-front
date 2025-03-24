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
                                     horas,
                                     horas_modificado,
                                     diretor
                                 }) => {
    const [temModificacao, setTemModificacao] = useState(false);
    const [topico_alterado, setTopicoAlterado] = useState(topico_modificado);
    const [horas_alterado, setHorasAlterado] = useState(horas_modificado);


    useEffect(() => {
        if (topico_modificado === "" && horas_modificado === "") {
            return;
        }

        if (topico_modificado === "") {
            setTopicoAlterado(topico);
        }

        if (horas_modificado === "") {
            setHorasAlterado(horas);
        }

        setTemModificacao(true);
    }, []);

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
                        {topico} - {horas}h
                    </TextoPreto>
                    {temModificacao &&
                        <TextoVermelho>
                            {topico_alterado} - {horas_alterado}h
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