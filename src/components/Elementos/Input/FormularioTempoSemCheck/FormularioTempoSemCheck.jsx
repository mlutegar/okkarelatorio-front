import { FormularioSemCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import { useState, useEffect } from "react";
import InputTempo from "../../../InputTempo/InputTempo";

const FormularioTempoSemCheck = ({ label, valorInicial = 0 }) => {
    const [tempoEmMinutos, setTempoEmMinutos] = useState(valorInicial);

    // Atualiza o estado quando o valorInicial mudar
    useEffect(() => {
        setTempoEmMinutos(valorInicial);
    }, [valorInicial]);

    // Esta função não fará nada real já que o componente está desabilitado
    // mas precisamos fornecê-la ao InputTempo
    const handleTempoChange = (totalMinutos) => {
        setTempoEmMinutos(totalMinutos);
    };

    return (
        <FormularioSemCheckStyle>
            <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
                <TextoAzul>{label}</TextoAzul>
            </div>
            <div style={{ width: '100%' }}>
                <InputTempo
                    onChange={handleTempoChange}
                    disabled={true} // Sempre desabilitado
                    valorInicial={tempoEmMinutos}
                />
            </div>
        </FormularioSemCheckStyle>
    );
};

export default FormularioTempoSemCheck;