import React, { useState, useEffect } from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import { useLocation, useNavigate } from "react-router-dom";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import FormularioComCheck from "../components/Elementos/Input/FormularioComCheck/FormularioComCheck";
import FormularioTextAreaSemCheck from "../components/Elementos/Input/FormularioTextAreaComCheck/FormularioTextAreaComCheck";
import atualizarRelatorioDiretor from "../api/atualizarRelatorioDiretor";
import FormularioTempoComCheck from "../components/Elementos/Input/FormularioTempoComCheck/FormularioTempoComCheck";

const FormularioDiretor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { relatorio } = location.state || {};

    const [idRelatorio, setId] = useState(relatorio ? relatorio.id : "");
    const [topico, setTopico] = useState(relatorio ? relatorio.titulo : "");
    const [tempoEmMinutos, setTempoEmMinutos] = useState(0);
    const [descricaoRelatorio, setDescricao] = useState(relatorio && relatorio.descricao ? relatorio.descricao : "");

    const [topicoAlterado, setTopicoAlterado] = useState(topico);
    const [tempoEmMinutosAlterados, setTempoEmMinutosAlterados] = useState(0);
    const [descricaoAlterada, setDescricaoAlterada] = useState(descricaoRelatorio);

    const [checkStatusTopico, setCheckStatusTopico] = useState(null);
    const [checkStatusHoras, setCheckStatusHoras] = useState(null);
    const [checkStatusDescricao, setCheckStatusDescricao] = useState(null);

    useEffect(() => {
        console.log("Relatório recebido:", relatorio);

        if (relatorio) {
            setTopico(relatorio.titulo);
            setTempoEmMinutos(relatorio.minutos);
            setDescricao(relatorio.descricao || "");
            setId(relatorio.id);
        }
    }, [relatorio]);

    const isFormValid = checkStatusTopico !== null && checkStatusHoras !== null && checkStatusDescricao !== null;

    const handleEnviar = async () => {
        const id = idRelatorio;
        const matricula = localStorage.getItem('matricula');;
        const hora_modificada = tempoEmMinutosAlterados;
        const descricao_modificada = descricaoAlterada;
        const titulo_modificada = topicoAlterado;

        const success = await atualizarRelatorioDiretor(id, matricula, hora_modificada, descricao_modificada, titulo_modificada);
        if (success) {
            navigate('/');
        } else {
            alert("Falha ao enviar relatório");
        }
    };

    return (
        <Base>
            <Titulo>FORMULÁRIO</Titulo>

            <FormularioComCheck
                label={"Tópico"}
                placeholder={topico}
                type={"text"}
                onCheckChange={setCheckStatusTopico}
                value={topicoAlterado}
                setValue={setTopicoAlterado}
            />

            <FormularioTempoComCheck
                label={"Tempo dedicado"}
                valorPadrao={tempoEmMinutos} // Valor padrão em minutos
                onCheckChange={setCheckStatusHoras}
                value={tempoEmMinutosAlterados}
                setValue={setTempoEmMinutosAlterados}
            />

            <FormularioTextAreaSemCheck
                label={"Descrição"}
                placeholder={descricaoRelatorio}
                onCheckChange={setCheckStatusDescricao}
                value={descricaoAlterada}
                setValue={setDescricaoAlterada}
            />

            <BotaoPrimario onClick={handleEnviar}
                           disabled={!isFormValid}
            >
                Enviar
            </BotaoPrimario>

            <BotaoCancelar onClick={() => navigate('/')}>
                Cancelar
            </BotaoCancelar>
        </Base>
    );
};

export default FormularioDiretor;
