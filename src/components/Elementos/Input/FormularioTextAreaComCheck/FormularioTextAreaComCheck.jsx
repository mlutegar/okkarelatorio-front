import { FormularioTextAreaComCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import BotoesCheck from "../../../Secoes/BotoesCheck/BotoesCheck";
import TextArea from "../../../TextArea/TextArea";
import { useState, useEffect } from "react";

const FormularioTextAreaComCheck = ({ label, placeholder, onCheckChange }) => {
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
        <FormularioTextAreaComCheckStyle>
            <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
                <TextoAzul>{label}</TextoAzul>
                <BotoesCheck selected={checkStatus} onSelect={handleCheckSelect} />
            </div>
            <TextArea
                className={"modificado"}
                placeholder={placeholder}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                disabled={checkStatus !== "negar"}
            />
        </FormularioTextAreaComCheckStyle>
    );
};

export default FormularioTextAreaComCheck;
