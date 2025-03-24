import Base from "./Base"
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import {useNavigate} from "react-router-dom";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import CardRelatorioPresidente from "../components/CardRelatorioPresidente/CardRelatorioPresidente";

const Presidente = () => {
    const navigate = useNavigate();
    const relatorio = {
        id: 1,
        topico: "Atendimento e Planejamento",
        topico_modificado: "",
        data: "10/10/2021",
        horas: 1,
        hora_modificada: 5,
        colaborador: "Cinthia Morais",
        diretor: "Alinne",
        descricao: "Eu fiz muitas coisas, tipo, muitas mesmo.",
        descricao_modificada: ""
    }
    return (
        <Base>
            <Titulo>
                Pendente
            </Titulo>
            <Subtitulo>
                Sem pendência. Espere algum diretor mandar algo.
            </Subtitulo>
            <CardRelatorioPresidente
                onClick={() => navigate("/formulario-presidente", {state: {relatorio}})}
                colaborador={relatorio.colaborador}
                diretor={relatorio.diretor}
                data={relatorio.data}
                topico={relatorio.topico}
                topico_modificado={relatorio.topico_modificado}
                horas={relatorio.horas}
                horas_modificado={relatorio.hora_modificada}
                descricao={relatorio.descricao}
            />
            <BotaoSecundario
                onClick={() => alert("Exportar")}
            >
                Exportar
            </BotaoSecundario>

            <button className={"teste"} onClick={() => {
                navigate('/login')
            }}>
                Logout
            </button>
        </Base>
    )
}

export default Presidente