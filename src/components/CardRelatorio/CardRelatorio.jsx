import { CardRelatorioStyle } from "./Style";
import TextoAzul from "../Elementos/Textos/TextoAzul/TextoAzul";
import TextoPreto from "../Elementos/Textos/TextoPreto/TextoPreto";
import TextoAmarelo from "../Elementos/Textos/TextoAmarelo/TextoAmarelo";

const CardRelatorio = ({onClick, colaborador, data, topico, horas}) => {
    return (
        <CardRelatorioStyle onClick={onClick}>
            <div style={{display: "flex", justifyContent: "space-between", padding: "1rem 1rem 0 1rem"}}>

                <TextoAzul>
                    Cinthia Morais
                </TextoAzul>
                <div className={"data"}>
                    <TextoAmarelo>
                        13/03/2025
                    </TextoAmarelo>
                </div>
            </div>

            <div style={{padding: "0 1rem"}}>
                <TextoPreto>
                    Criação de relatório - 8h
                </TextoPreto>

            </div>
            </CardRelatorioStyle>
    );
}

export default CardRelatorio;