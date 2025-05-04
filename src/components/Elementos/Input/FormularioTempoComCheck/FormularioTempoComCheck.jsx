import { FormularioComCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import BotoesCheck from "../../../Secoes/BotoesCheck/BotoesCheck";
import { useState, useEffect } from "react";
import InputTempo from "../../../InputTempo/InputTempo";

const FormularioTempoComCheck = ({ label, valorPadrao = 0, onCheckChange, value, setValue }) => {
    const [checkStatus, setCheckStatus] = useState(null);

    // Efeito para resetar o valor quando o check status muda
    useEffect(() => {
        if (checkStatus !== "negar") {
            if (setValue) setValue(valorPadrao);
        }
    }, [checkStatus, valorPadrao, setValue]);

    const handleCheckSelect = (status) => {
        setCheckStatus(status);
        if (onCheckChange) onCheckChange(status);
    };

    const handleTempoChange = (totalMinutos) => {
        if (setValue && checkStatus === "negar") {
            setValue(totalMinutos);
        }
    };

    return (
        <FormularioComCheckStyle>
            <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
                <TextoAzul>{label}</TextoAzul>
                <BotoesCheck selected={checkStatus} onSelect={handleCheckSelect} />
            </div>
            <div style={{ width: '100%' }}>
                <InputTempo
                    onChange={handleTempoChange}
                    disabled={checkStatus !== "negar"}
                    // Podemos converter o valor atual (em minutos) para exibir nos campos
                    valorInicial={value}
                />
            </div>
        </FormularioComCheckStyle>
    );
};

export default FormularioTempoComCheck;