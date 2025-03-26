import React, { useState, useEffect } from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import { useLocation, useNavigate } from "react-router-dom";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import FormularioComCheck from "../components/Elementos/Input/FormularioComCheck/FormularioComCheck";
import FormularioTextAreaSemCheck from "../components/Elementos/Input/FormularioTextAreaComCheck/FormularioTextAreaComCheck";
import enviarRelatorio from "../api/enviarRelatorio";
import atualizarRelatorioDiretor from "../api/atualizarRelatorioDiretor";

const FormularioDiretor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { relatorio } = location.state || {};

    const [idRelatorio, setId] = useState(relatorio ? relatorio.id : "");
    const [topico, setTopico] = useState(relatorio ? relatorio.titulo : "");
    const [horas, setHoras] = useState(relatorio ? relatorio.hora : "");
    const [descricaoRelatorio, setDescricao] = useState(relatorio && relatorio.descricao ? relatorio.descricao : "");

    const [topicoAlterado, setTopicoAlterado] = useState(topico);
    const [horasAlteradas, setHorasAlteradas] = useState(horas);
    const [descricaoAlterada, setDescricaoAlterada] = useState(descricaoRelatorio);

    // Estados para armazenar o status de check de cada campo
    const [checkStatusTopico, setCheckStatusTopico] = useState(null);
    const [checkStatusHoras, setCheckStatusHoras] = useState(null);
    const [checkStatusDescricao, setCheckStatusDescricao] = useState(null);

    useEffect(() => {
        if (relatorio) {
            console.log("Relatório recebido:", relatorio);
            setTopico(relatorio.titulo);
            setHoras(relatorio.hora);
            setDescricao(relatorio.descricao || "");
            setId(relatorio.id);
        }

        console.log("Relatório:", relatorio);
    }, [relatorio]);

    const isFormValid = checkStatusTopico !== null && checkStatusHoras !== null && checkStatusDescricao !== null;

    const handleEnviar = async () => {
        console.log("Enviando relatório...");
        console.log("Topico:", topicoAlterado);
        console.log("Horas:", horasAlteradas);
        console.log("Descrição:", descricaoAlterada);

        const id = idRelatorio;
        const matricula = localStorage.getItem('matricula');;
        const hora_modificada = horasAlteradas;
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

            <FormularioComCheck
                label={"Horas"}
                placeholder={horas}
                type={"number"}
                onCheckChange={setCheckStatusHoras}
                value={horasAlteradas}
                setValue={setHorasAlteradas}
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
