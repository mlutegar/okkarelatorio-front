import React, {useState, useEffect} from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import {useLocation, useNavigate} from "react-router-dom";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import FormularioComCheck from "../components/Elementos/Input/FormularioComCheck/FormularioComCheck";
import FormularioTextAreaSemCheck
    from "../components/Elementos/Input/FormularioTextAreaComCheck/FormularioTextAreaComCheck";
import FormularioSemCheck from "../components/Elementos/Input/FormularioSemCheck/FormularioSemCheck";
import FormularioTextAreaComCheck
    from "../components/Elementos/Input/FormularioTextAreaComCheck/FormularioTextAreaComCheck";

const FormularioPresidente = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {relatorio} = location.state || {};

    const [topico, setTopico] = useState(relatorio ? relatorio.titulo : "");
    const [topicoModificado, setTopicoModificado] = useState(relatorio ? relatorio.titulo_modificado : "");

    const [horas, setHoras] = useState(relatorio ? relatorio.hora : "");
    const [horasModificado, setHorasModificado] = useState(relatorio ? relatorio.hora_modificada : "");

    const [descricao, setDescricao] = useState(relatorio ? relatorio.descricao : "");
    const [descricaoModificada, setDescricaoModificada] = useState(relatorio ? relatorio.descricao_modificada : "");

    const [colaborador, setColaborador] = useState(relatorio ? relatorio.colaborador : "");
    const [diretor, setDiretor] = useState(relatorio ? relatorio.diretor : "");

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
            setTopicoModificado(relatorio.titulo_modificado);
            setHorasModificado(relatorio.hora_modificada);
            setDescricaoModificada(relatorio.descricao_modificada);
            setColaborador(relatorio.colaborador);
            setDiretor(relatorio.diretor);
        }
    }, [relatorio]);

    // Verifica se todos os campos tiveram seu check definido
    const isFormValid = checkStatusTopico !== null && checkStatusHoras !== null && checkStatusDescricao !== null;

    const handleEnviar = () => {
        // Trate aqui o envio dos dados do formulário
        console.log("Dados do formulário:", {topico, horas, descricao});
        navigate('/');
    };

    return (
        <Base>
            <Titulo>FORMULÁRIO</Titulo>

            {topicoModificado ? (
                    <div style={{width: "100%"}}>
                        <FormularioComCheck
                            label={"Tópico"}
                            placeholder={topicoModificado + " - " + diretor}
                            type={"text"}
                            onCheckChange={setCheckStatusTopico}
                        />
                        <FormularioSemCheck
                            label={""}
                            placeholder={topico + " - " + colaborador}
                            type={"text"}
                        />
                    </div>
                ) :
                <FormularioComCheck
                    label={"Tópico"}
                    placeholder={topico}
                    type={"text"}
                    onCheckChange={setCheckStatusTopico}
                />
            }

            {horasModificado ? (
                    <div style={{width: "100%"}}>
                        <FormularioComCheck
                            label={"Horas"}
                            placeholder={horasModificado + "h - " + diretor}
                            type={"number"}
                            onCheckChange={setCheckStatusHoras}
                        />
                        <FormularioSemCheck
                            label={""}
                            placeholder={horas + "h - " + colaborador}
                            type={"number"}
                        />
                    </div>
                ) :
                <FormularioComCheck
                    label={"Horas"}
                    placeholder={horas}
                    type={"number"}
                    onCheckChange={setCheckStatusHoras}
                />
            }

            {descricaoModificada ? (
                    <div style={{width: "100%"}}>
                        <FormularioTextAreaComCheck
                            label={"Descrição"}
                            placeholder={descricaoModificada + " - " + diretor}
                            onCheckChange={setCheckStatusDescricao}
                        />
                        <FormularioTextAreaSemCheck
                            label={""}
                            placeholder={descricao + " - " + colaborador}
                            onCheckChange={setCheckStatusDescricao}
                        />
                    </div>
                ) :
                <FormularioTextAreaComCheck
                    label={"Descrição"}
                    placeholder={descricao}
                    onCheckChange={setCheckStatusDescricao}
                />
            }

            <BotaoPrimario onClick={handleEnviar} disabled={!isFormValid}>
                Enviar
            </BotaoPrimario>

            <BotaoCancelar onClick={() => navigate('/')}>
                Cancelar
            </BotaoCancelar>
        </Base>
    );
};

export default FormularioPresidente;
