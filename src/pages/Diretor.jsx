import Base from "./Base"
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import BotaoAdd from "../components/Elementos/Botoes/BotaoAdd/BotaoAdd";
import {useNavigate} from "react-router-dom";
import CardRelatorio from "../components/CardRelatorio/CardRelatorio";

const Colaborador = () => {
    const navigate = useNavigate();
    const relatorio = {
        id: 1,
        topico: "Atendimento e Planejamento",
        data: "10/10/2021",
        horas: 1,
        colaborador: "Cinthia Morais",
        descricao: "Eu fiz muitas coisas, tipo, muitas mesmo."
    }
    return (
        <Base>
            <Titulo>
                Pendente
            </Titulo>
            <Subtitulo>
                Sem pendência. espere o colaborador de sua área mandar algo.
            </Subtitulo>
            <CardRelatorio
                onClick={() => navigate("/formulario-diretor", {state: {relatorio}})}
                colaborador={relatorio.colaborador}
                data={relatorio.data}
                topico={relatorio.topico}
                horas={relatorio.horas}
                descricao={relatorio.descricao}
            />
            <button className={"teste"} onClick={() => {
                navigate('/login')
            }}>
                Logout
            </button>
        </Base>
    )
}

export default Colaborador