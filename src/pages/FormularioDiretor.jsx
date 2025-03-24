import React, { useState, useEffect } from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import { useLocation, useNavigate } from "react-router-dom";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import FormularioComCheck from "../components/Elementos/Input/FormularioComCheck/FormularioComCheck";
import FormularioTextAreaSemCheck from "../components/Elementos/Input/FormularioTextAreaComCheck/FormularioTextAreaComCheck";

const FormularioDiretor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { relatorio } = location.state || {};
    const [topico, setTopico] = useState(relatorio ? relatorio.topico : "");
    const [horas, setHoras] = useState(relatorio ? relatorio.horas : "");
    const [descricao, setDescricao] = useState(relatorio && relatorio.descricao ? relatorio.descricao : "");

    // Estados para armazenar o status de check de cada campo
    const [checkStatusTopico, setCheckStatusTopico] = useState(null);
    const [checkStatusHoras, setCheckStatusHoras] = useState(null);
    const [checkStatusDescricao, setCheckStatusDescricao] = useState(null);

    useEffect(() => {
        if (relatorio) {
            console.log("Relatório recebido:", relatorio);
            setTopico(relatorio.topico);
            setHoras(relatorio.horas);
            setDescricao(relatorio.descricao || "");
        }
    }, [relatorio]);

    // Verifica se todos os campos tiveram seu check definido
    const isFormValid = checkStatusTopico !== null && checkStatusHoras !== null && checkStatusDescricao !== null;

    const handleEnviar = () => {
        // Trate aqui o envio dos dados do formulário
        console.log("Dados do formulário:", { topico, horas, descricao });
        navigate('/');
    };

    return (
        <Base>
            <Titulo>FORMULÁRIO</Titulo>

            <FormularioComCheck
                label={"Tópico"}
                placeholder={topico}
                type={"text"}
                onCheckChange={setCheckStatusTopico}
            />

            <FormularioComCheck
                label={"Horas"}
                placeholder={horas}
                type={"number"}
                onCheckChange={setCheckStatusHoras}
            />

            <FormularioTextAreaSemCheck
                label={"Descrição"}
                placeholder={descricao}
                onCheckChange={setCheckStatusDescricao}
            />

            <BotaoPrimario onClick={handleEnviar} disabled={!isFormValid}>
                Enviar
            </BotaoPrimario>

            <BotaoCancelar onClick={() => navigate('/')}>
                Cancelar
            </BotaoCancelar>
        </Base>
    );
};

export default FormularioDiretor;
