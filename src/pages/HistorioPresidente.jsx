import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import CardRelatorio from "../components/CardRelatorio/CardRelatorio";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import fetchRelatorioFinalizado from "../api/fetchRelatorioFinalizado";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";

// Função para formatar a data
const formatDate = (dateString) => {
    const date = new Date(dateString); // Cria um objeto Date a partir da string
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona 1 ao mês, pois o mês começa de 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year} ${month} ${day}`;
};

const HistoricoPresidente = () => {
    const [relatorios, setRelatorios] = useState([]);
    const matricula = localStorage.getItem("matricula");

    useEffect(() => {
        const fetchRelatorios = async () => {
            const relatoriosFetch = await fetchRelatorioFinalizado();
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

        {relatorios.map((relatorio, index) => (
            <CardRelatorio
                key={index}
                onClick={() => navigate("/visualizar-card", {state: {relatorio}})}
                colaborador={relatorio.colaborador}
                data={formatDate(relatorio.data_criacao)} // Formata a data aqui
                topico={relatorio.titulo}
                minutos={relatorio.minutos}
                descricao={relatorio.descricao}
            />
        ))}

        {!relatorios.length && (<Subtitulo>
            Sem relatórios enviados
        </Subtitulo>)}

        <BotaoSecundario
            onClick={() => {
                window.location.href = 'https://okkarelatorio.fly.dev/api/export-excel';
            }}
        >
            Exportar
        </BotaoSecundario>

        <BotaoPrimario
            onClick={() => navigate('/presidente')}
        >
            Voltar
        </BotaoPrimario>

    </Base>);
};

export default HistoricoPresidente;
