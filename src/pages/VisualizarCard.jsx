import React, {useState, useEffect} from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import {useLocation, useNavigate} from "react-router-dom";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import FormularioComCheck from "../components/Elementos/Input/FormularioComCheck/FormularioComCheck";
import FormularioTextAreaSemCheck
    from "../components/Elementos/Input/FormularioTextAreaSemCheck/FormularioTextAreaSemCheck";
import FormularioSemCheck from "../components/Elementos/Input/FormularioSemCheck/FormularioSemCheck";
import FormularioTextAreaComCheck
    from "../components/Elementos/Input/FormularioTextAreaComCheck/FormularioTextAreaComCheck";

const VisualizarCard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {relatorio} = location.state || {};
    const [topico, setTopico] = useState(relatorio ? relatorio.titulo : "");
    const [horas, setHoras] = useState(relatorio ? relatorio.hora : "");
    const [descricao, setDescricao] = useState(relatorio ? relatorio.descricao : "");

    const [topicoModificado, setTopicoModificado] = useState(relatorio ? relatorio.titulo_modificado : "");
    const [horasModificado, setHorasModificado] = useState(relatorio ? relatorio.hora_modificada : "");
    const [descricaoModificada, setDescricaoModificada] = useState(relatorio ? relatorio.descricao_modificada : "");

    useEffect(() => {
        if (relatorio) {
            console.log("Relatório recebido:", relatorio);
            setTopico(relatorio.titulo);
            setHoras(relatorio.hora);
            setDescricao(relatorio.descricao || "");
            setTopicoModificado(relatorio.titulo_modificado);
            setHorasModificado(relatorio.hora_modificada);
            setDescricaoModificada(relatorio.descricao_modificada);
        }
    }, [relatorio]);

    return (
        <Base>
            <Titulo>FORMULÁRIO</Titulo>

            {(topicoModificado !== topico) ? (
                    <div style={{width: "100%"}}>
                        <FormularioComCheck
                            label={"Tópico"}
                            placeholder={topicoModificado}
                            type={"text"}
                            value={topicoModificado}
                        />
                        <FormularioSemCheck
                            label={""}
                            placeholder={topico}
                            type={"text"}
                        />
                    </div>
                ) :
                <FormularioComCheck
                    label={"Tópico"}
                    placeholder={topico}
                    type={"text"}
                    value={topicoModificado}
                />
            }

            {(horasModificado !== horas) ? (
                    <div style={{width: "100%"}}>
                        <FormularioComCheck
                            label={"Horas"}
                            placeholder={horasModificado}
                            type={"number"}
                            value={horasModificado}
                        />
                        <FormularioSemCheck
                            label={""}
                            placeholder={horas}
                            type={"number"}
                        />
                    </div>
                ) :
                <FormularioComCheck
                    label={"Horas"}
                    placeholder={horas + "h"}
                    type={"number"}
                    value={horasModificado}
                />
            }

            {(descricaoModificada !== descricao) ? (
                    <div style={{width: "100%"}}>
                        <FormularioTextAreaComCheck
                            label={"Descrição"}
                            placeholder={descricaoModificada}
                            value={descricaoModificada}
                        />
                        <FormularioTextAreaSemCheck
                            label={""}
                            placeholder={descricao}
                        />
                    </div>
                ) :
                <FormularioTextAreaComCheck
                    label={"Descrição"}
                    placeholder={descricao}
                    value={descricaoModificada}
                />
            }

            <BotaoPrimario onClick={() => navigate('/historico')}>
                Voltar
            </BotaoPrimario>
        </Base>
    );
};

export default VisualizarCard;
