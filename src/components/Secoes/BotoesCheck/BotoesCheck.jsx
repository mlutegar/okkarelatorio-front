import { BotoesCheckStyle } from "./Style";
import { CheckPadrao } from "../../Icones/CheckPadrao";
import { NegarVermelho } from "../../Icones/NegarVermelho";
import { CheckVerde } from "../../Icones/CheckVerde";
import { NegarPadrao } from "../../Icones/NegarPadrao";

const BotoesCheck = ({ selected, onSelect }) => {
    return (
        <BotoesCheckStyle>
            {selected === null ? (
                <>
                    <CheckPadrao onClick={() => onSelect("check")} />
                    <NegarPadrao onClick={() => onSelect("negar")} />
                </>
            ) : selected === "check" ? (
                <CheckVerde onClick={() => onSelect(null)} />
            ) : (
                <NegarVermelho onClick={() => onSelect(null)} />
            )}
        </BotoesCheckStyle>
    );
};

export default BotoesCheck;
