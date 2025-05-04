import Base from "./Base"
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchRelatorioPresidente from "../api/fetchRelatorioPresidente";
import CardRelatorioPresidente from "../components/CardRelatorioPresidente/CardRelatorioPresidente";
import BotaoAdd from "../components/Elementos/Botoes/BotaoAdd/BotaoAdd";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";

const formatDate = (dateString) => {
    const date = new Date(dateString); // Cria um objeto Date a partir da string
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona 1 ao mês, pois o mês começa de 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year} ${month} ${day}`;
};

const Presidente = () => {
    const navigate = useNavigate();
    const [relatorios, setRelatorios] = useState([]);
    const setor = localStorage.getItem("setor");

    useEffect(() => {
        const fetchRelatorios = async () => {
            const relatoriosFetch = await fetchRelatorioPresidente();
            if (relatoriosFetch) {
                setRelatorios(relatoriosFetch);
            }
        };

        fetchRelatorios();
    }, []); // Adicionando matricula como dependência

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

            {relatorios.map((relatorio, index) => (
                <CardRelatorioPresidente
                    key={index}
                    onClick={() => navigate("/formulario-presidente", { state: { relatorio } })}
                    colaborador={relatorio.colaborador}
                    data={formatDate(relatorio.data_criacao)} // Formata a data aqui
                    topico={relatorio.titulo}
                    topico_modificado={relatorio.titulo_modificado}
                    minutos={relatorio.minutos}
                    minutos_modificada={relatorio.minutos_modificada}
                    descricao={relatorio.descricao}
                    diretor={relatorio.diretor}
                />
            ))}


            <BotaoAdd
                onClick={() => navigate('/formulario-presidente-novo')}
            />

            <BotaoSecundario
                onClick={() => navigate("/historico")}
            >
                Vê Histórico
            </BotaoSecundario>
        </Base>
    )
}

export default Presidente