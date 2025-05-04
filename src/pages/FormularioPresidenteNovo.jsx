import React, { useState } from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import { useNavigate } from "react-router-dom";
import TextoAzul from "../components/Elementos/Textos/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import TextArea from "../components/TextArea/TextArea";
import InputTempo from "../components/InputTempo/InputTempo";
import enviarRelatorioPresidente from "../api/enviarRelatorioPresidente";

const FormularioPresidenteNovo = () => {
    const navigate = useNavigate();
    const [topico, setTopico] = useState("");
    const [tempoEmMinutos, setTempoEmMinutos] = useState(0);
    const [descricao, setDescricao] = useState("");
    const isFormValid = topico.trim() !== "" && tempoEmMinutos !== 0 && descricao.trim() !== "";

    const handleEnviar = async () => {
        const diretor = localStorage.getItem('matricula');
        const setor = localStorage.getItem('setor');
        const titulo = topico;
        const hora = tempoEmMinutos;

        const success = await enviarRelatorioPresidente(diretor, setor, titulo, descricao, hora);
        if (success) {
            navigate('/');
        } else {
            alert("Falha ao enviar relatório");
        }
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

            <InputTempo onChange={setTempoEmMinutos} />

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

export default FormularioPresidenteNovo;