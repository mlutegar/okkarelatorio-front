import React, { useState } from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import { useNavigate } from "react-router-dom";
import TextoAzul from "../components/Elementos/Textos/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import TextArea from "../components/TextArea/TextArea";

const Formulario = () => {
    const navigate = useNavigate();
    const [topico, setTopico] = useState("");
    const [horas, setHoras] = useState("");
    const [descricao, setDescricao] = useState("");

    // Verifica se todos os campos foram preenchidos (removendo espaços em branco)
    const isFormValid = topico.trim() !== "" && horas.trim() !== "" && descricao.trim() !== "";

    const handleEnviar = () => {
        navigate('/');
    };

    return (
        <Base>
            <Titulo>FORMULÁRIO</Titulo>

            <div style={{ width: '100%' }}>
                <TextoAzul>Tópico</TextoAzul>
                <Input
                    placeholder={"Preencha o tópico"}
                    type="text"
                    value={topico}
                    onChange={(e) => setTopico(e.target.value)}
                />
            </div>

            <div style={{ width: '100%' }}>
                <TextoAzul>Horas</TextoAzul>
                <Input
                    placeholder={"Preencha as horas"}
                    type="number"
                    value={horas}
                    onChange={(e) => setHoras(e.target.value)}
                />
            </div>

            <div style={{ width: '100%' }}>
                <TextoAzul>Descrição</TextoAzul>
                <TextArea
                    placeholder={"Preencha a descrição"}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>

            <BotaoPrimario onClick={handleEnviar} disabled={!isFormValid}>
                Enviar
            </BotaoPrimario>

            <BotaoCancelar onClick={() => navigate('/')}>
                Cancelar
            </BotaoCancelar>
        </Base>
    );
};

export default Formulario;
