import { FormularioSemCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import Input from "../../../Input/Input";
import { useState, useEffect } from "react";

const FormularioSemCheck = ({ label, placeholder, type, onCheckChange }) => {
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
        <FormularioSemCheckStyle>
            <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
                <TextoAzul>{label}</TextoAzul>
            </div>
            <Input
                placeholder={placeholder}
                type={type}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                disabled={true}
            />
        </FormularioSemCheckStyle>
    );
};

export default FormularioSemCheck;
