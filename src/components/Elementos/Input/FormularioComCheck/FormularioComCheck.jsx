import { FormularioComCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import BotoesCheck from "../../../Secoes/BotoesCheck/BotoesCheck";
import Input from "../../../Input/Input";
import { useState, useEffect } from "react";

const FormularioComCheck = ({ label, placeholder, type, onCheckChange, value, setValue }) => {
    const [checkStatus, setCheckStatus] = useState(null);

    useEffect(() => {
        if (checkStatus !== "negar") {
            if(setValue) setValue(placeholder);
        }
    }, [checkStatus, placeholder]);

    const handleCheckSelect = (status) => {
        setCheckStatus(status);
        if (onCheckChange) onCheckChange(status);
    };

    const handleValueChange = (e) => {
        if(setValue) setValue(e.target.value);
    }

    return (
        <FormularioComCheckStyle>
            <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
                <TextoAzul>{label}</TextoAzul>
                <BotoesCheck selected={checkStatus} onSelect={handleCheckSelect} />
            </div>
            <Input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleValueChange}
                disabled={checkStatus !== "negar"}
            />
        </FormularioComCheckStyle>
    );
};

export default FormularioComCheck;
