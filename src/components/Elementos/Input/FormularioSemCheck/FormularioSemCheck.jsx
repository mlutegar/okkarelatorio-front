import { FormularioSemCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import Input from "../../../Input/Input";
import { useState } from "react";

const FormularioSemCheck = ({ label, placeholder, type }) => {
    const [valor, setValor] = useState(placeholder);

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
