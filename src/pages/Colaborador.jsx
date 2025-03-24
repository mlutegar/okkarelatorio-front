import Base from "./Base"
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import BotaoAdd from "../components/Elementos/Botoes/BotaoAdd/BotaoAdd";
import {useNavigate} from "react-router-dom";

const Colaborador = () => {
    const navigate = useNavigate();
    return (
        <Base>
            <Titulo>
                HISTÓRICO
            </Titulo>
            <Subtitulo>
                Clique no botão para adicionar
            </Subtitulo>
            <BotaoAdd
                onClick={() => navigate('/formulario')}
            />

            <button className={"teste"} onClick={() => {navigate('/login')}}>
                Logout
            </button>
        </Base>
    )
}

export default Colaborador