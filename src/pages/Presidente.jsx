import Base from "./Base"
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import {useNavigate} from "react-router-dom";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import {useEffect, useState} from "react";
import fetchRelatorio from "../api/fetchRelatorio";
import CardRelatorioPresidente from "../components/CardRelatorioPresidente/CardRelatorioPresidente";

const Presidente = () => {
    const navigate = useNavigate();
    const [relatorios, setRelatorios] = useState([]);
    const setor = localStorage.getItem("setor");

    useEffect(() => {
        const fetchRelatorios = async () => {
            const relatoriosFetch = await fetchRelatorio();
            console.log("Relatórios:", relatoriosFetch);
            if (relatoriosFetch) {
                setRelatorios(relatoriosFetch);
            }
        };

        fetchRelatorios();
    }, [setor]); // Adicionando matricula como dependência


    return (
        <Base>
            <Titulo>
                Pendente
            </Titulo>

            {!relatorios.length && (
                <Subtitulo>
                    Sem pendência. Espere algum diretor mandar algo.
                </Subtitulo>
            )}

            {relatorios.map((relatorio) => (
                <CardRelatorioPresidente
                    onClick={() => navigate("/formulario-presidente", { state: { relatorio } })}
                    colaborador={relatorio.colaborador}
                    data={formatDate(relatorio.data_criacao)} // Formata a data aqui
                    topico={relatorio.titulo}
                    horas={relatorio.hora}
                    descricao={relatorio.descricao}
                />
            ))}

            <BotaoSecundario
                onClick={() => alert("Exportar")}
            >
                Exportar
            </BotaoSecundario>
        </Base>
    )
}

export default Presidente