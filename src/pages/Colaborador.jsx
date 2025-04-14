import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import BotaoAdd from "../components/Elementos/Botoes/BotaoAdd/BotaoAdd";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchRelatorioPorMatricula from "../api/fetchRelatorioPorMatricula";
import CardRelatorioPresidente from "../components/CardRelatorioPresidente/CardRelatorioPresidente";
import CardRelatorio from "../components/CardRelatorio/CardRelatorio";

// Função para formatar a data
const formatDate = (dateString) => {
    const date = new Date(dateString); // Cria um objeto Date a partir da string
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona 1 ao mês, pois o mês começa de 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year} ${month} ${day}`;
};

const Colaborador = () => {
    const [relatorios, setRelatorios] = useState([]);
    const matricula = localStorage.getItem("matricula");

    useEffect(() => {
        const fetchRelatorios = async () => {
            const relatoriosFetch = await fetchRelatorioPorMatricula(matricula);
            if (relatoriosFetch) {
                setRelatorios(relatoriosFetch);
            }
        };

        fetchRelatorios();
    }, [matricula]); // Adicionando matricula como dependência

    const navigate = useNavigate();
    return (<Base>
            <Titulo>
                HISTÓRICO
            </Titulo>

            {relatorios.map((relatorio) => (<CardRelatorio
                    onClick={() => {}}
                    colaborador={relatorio.colaborador}
                    data={formatDate(relatorio.data_criacao)} // Formata a data aqui
                    topico={relatorio.titulo}
                    horas={relatorio.hora}
                    descricao={relatorio.descricao}
                />))}

            {!relatorios.length && (<Subtitulo>
                    Sem relatórios enviados
                </Subtitulo>)}

            <BotaoAdd
                onClick={() => navigate('/formulario')}
            />
        </Base>);
};

export default Colaborador;
