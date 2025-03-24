import React, { useState, useEffect } from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import { useLocation, useNavigate } from "react-router-dom";
import TextoAzul from "../components/Elementos/Textos/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import TextArea from "../components/TextArea/TextArea";

const FormularioDiretor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { relatorio } = location.state || {};
    const [topico, setTopico] = useState(relatorio ? relatorio.topico : "");
    const [horas, setHoras] = useState(relatorio ? relatorio.horas : "");
    const [descricao, setDescricao] = useState(relatorio && relatorio.descricao ? relatorio.descricao : "");

    useEffect(() => {
        if (relatorio) {
            console.log("Relatório recebido:", relatorio);
            setTopico(relatorio.topico);
            setHoras(relatorio.horas);
            setDescricao(relatorio.descricao || "");
        }
    }, [relatorio]);

    const handleEnviar = () => {
        // Aqui você pode tratar o envio dos dados do formulário
        console.log("Dados do formulário:", { topico, horas, descricao });
        navigate('/');
    };

    return (
        <Base>
            <Titulo>
                FORMULÁRIO
            </Titulo>

            <div style={{ width: '100%' }}>
                <TextoAzul>
                    Tópico
                </TextoAzul>
                <Input
                    placeholder={topico}
                    type="text"
                    value={topico}
                    onChange={(e) => setTopico(e.target.value)}
                />
            </div>

            <div style={{ width: '100%' }}>
                <TextoAzul>
                    Horas
                </TextoAzul>
                <Input
                    placeholder={horas}
                    type="number"
                    value={horas}
                    onChange={(e) => setHoras(e.target.value)}
                />
            </div>

            <div style={{ width: '100%' }}>
                <TextoAzul>
                    Descrição
                </TextoAzul>
                <TextArea
                    placeholder={descricao}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>

            <BotaoPrimario onClick={handleEnviar}>
                Enviar
            </BotaoPrimario>

            <BotaoCancelar onClick={() => navigate('/')}>
                Cancelar
            </BotaoCancelar>
        </Base>
    );
};

export default FormularioDiretor;
