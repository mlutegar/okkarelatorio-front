import { FormularioComCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import BotoesCheck from "../../../Secoes/BotoesCheck/BotoesCheck";
import Input from "../../../Input/Input";
import { useState, useEffect } from "react";

const FormularioComCheck = ({ label, placeholder, type, onCheckChange }) => {
    // Inicializa o estado com o valor recebido
    const [valor, setValor] = useState(placeholder);
    const [checkStatus, setCheckStatus] = useState(null);

    useEffect(() => {
        if (checkStatus !== "negar") {
            setValor(placeholder);
        }
    }, [checkStatus, placeholder]);

    const handleCheckSelect = (status) => {
        setCheckStatus(status);
        if (onCheckChange) onCheckChange(status);
    };

    return (
        <FormularioComCheckStyle>
            <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
                <TextoAzul>{label}</TextoAzul>
                <BotoesCheck selected={checkStatus} onSelect={handleCheckSelect} />
            </div>
            <Input
                placeholder={placeholder}
                type={type}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                disabled={checkStatus !== "negar"}
            />
        </FormularioComCheckStyle>
    );
};

export default FormularioComCheck;
