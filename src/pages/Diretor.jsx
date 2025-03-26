import Base from "./Base"
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import Subtitulo from "../components/Elementos/Textos/Subtitulo/Subtitulo";
import {useNavigate} from "react-router-dom";
import CardRelatorio from "../components/CardRelatorio/CardRelatorio";
import fetchRelatorioPorSetor from "../api/fetchRelatorioPorSetor";
import {useEffect, useState} from "react";

const formatDate = (dateString) => {
    const date = new Date(dateString); // Cria um objeto Date a partir da string
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona 1 ao mês, pois o mês começa de 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year} ${month} ${day}`;
};

const Diretor = () => {
    const navigate = useNavigate();
    const [relatorios, setRelatorios] = useState([]);
    const setor = localStorage.getItem("setor");

    useEffect(() => {
        console.log("Setor:", setor);
        const fetchRelatorios = async () => {
            const relatoriosFetch = await fetchRelatorioPorSetor(setor);
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
                    Sem pendência. espere o colaborador de sua área mandar algo.
                </Subtitulo>
            )}

            {relatorios.map((relatorio) => (
                <CardRelatorio
                    onClick={() => navigate("/formulario-diretor", { state: { relatorio } })}
                    colaborador={relatorio.colaborador}
                    data={formatDate(relatorio.data_criacao)} // Formata a data aqui
                    topico={relatorio.titulo}
                    horas={relatorio.hora}
                />
            ))}
        </Base>
    )
}

export default Diretor