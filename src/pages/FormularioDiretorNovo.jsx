import React, { useState } from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import { useNavigate } from "react-router-dom";
import TextoAzul from "../components/Elementos/Textos/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import TextArea from "../components/TextArea/TextArea";
import enviarRelatorioDiretor from "../api/enviarRelatorioDiretor";

const FormularioDiretorNovo = () => {
    const navigate = useNavigate();
    const [topico, setTopico] = useState("");
    const [horas, setHoras] = useState("");
    const [descricao, setDescricao] = useState("");
    const isFormValid = topico.trim() !== "" && horas.trim() !== "" && descricao.trim() !== "";

    const handleEnviar = async () => {
        const diretor = localStorage.getItem('matricula');
        const setor = localStorage.getItem('setor');
        const titulo = topico;
        const hora = horas;

        const success = await enviarRelatorioDiretor(diretor, setor, titulo, descricao, hora);
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
                Enviar para Presidência
            </BotaoPrimario>

            <BotaoCancelar onClick={() => navigate('/')}>
                Cancelar
            </BotaoCancelar>
        </Base>
    );
};

export default FormularioDiretorNovo;