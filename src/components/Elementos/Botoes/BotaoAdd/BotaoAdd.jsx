import { BotaoAddStyle } from "./Style";
import {Plus} from "../../../Icones/Plus";

const BotaoAdd = ({onClick}) => {
    return (
        <BotaoAddStyle onClick={onClick}>
            <Plus/>
        </BotaoAddStyle>
    );
}

export default BotaoAdd;