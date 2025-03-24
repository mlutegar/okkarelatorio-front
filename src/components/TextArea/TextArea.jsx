import { TextAreaStyle } from "./Style";

const TextArea = ({placeholder, value, onChange, disabled, className}) => {
    return (
        <TextAreaStyle placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} className={className} />
    );
}

export default TextArea;