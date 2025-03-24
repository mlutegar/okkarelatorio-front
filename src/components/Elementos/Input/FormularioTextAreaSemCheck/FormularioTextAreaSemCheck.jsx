import { FormularioTextAreaSemCheckStyle } from "./Style";
import TextoAzul from "../../Textos/TextoAzul/TextoAzul";
import TextArea from "../../../TextArea/TextArea";
import { useState } from "react";

const FormularioTextAreaSemCheck = ({ label, placeholder, onCheckChange }) => {
    const [valor, setValor] = useState(placeholder);

    return (
        <FormularioTextAreaSemCheckStyle>
            <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
                <TextoAzul>{label}</TextoAzul>
            </div>
            <TextArea
                placeholder={placeholder}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                disabled={true}
            />
        </FormularioTextAreaSemCheckStyle>
    );
};

export default FormularioTextAreaSemCheck;
