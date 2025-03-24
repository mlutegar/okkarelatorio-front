import { CardRelatorioStyle } from "./Style";
import TextoAzul from "../Elementos/Textos/TextoAzul/TextoAzul";
import TextoPreto from "../Elementos/Textos/TextoPreto/TextoPreto";
import TextoAmarelo from "../Elementos/Textos/TextoAmarelo/TextoAmarelo";

const CardRelatorio = ({onClick, colaborador, data, topico, horas}) => {
    return (
        <CardRelatorioStyle onClick={onClick}>
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

            <div style={{padding: "0 1rem"}}>
                <TextoPreto>
                    {topico} - {horas}h
                </TextoPreto>

            </div>
            </CardRelatorioStyle>
    );
}

export default CardRelatorio;