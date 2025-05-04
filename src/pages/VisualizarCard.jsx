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
import FormularioTempoComCheck from "../components/Elementos/Input/FormularioTempoComCheck/FormularioTempoComCheck";
import FormularioTempoSemCheck from "../components/Elementos/Input/FormularioTempoSemCheck/FormularioTempoSemCheck";

const VisualizarCard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {relatorio} = location.state || {};

    const [topico, setTopico] = useState(relatorio ? relatorio.titulo : "");
    const [topicoModificado, setTopicoModificado] = useState(relatorio ? relatorio.titulo_modificado : "");

    const [tempoEmMinutos, setTempoEmMinutos] = useState(relatorio ? relatorio.minutos : 0);
    const [tempoEmMinutosAlterados, setTempoEmMinutosAlterados] = useState(relatorio ? relatorio.minutos_modificada : 0);

    const [descricao, setDescricao] = useState(relatorio ? relatorio.descricao : "");
    const [descricaoModificada, setDescricaoModificada] = useState(relatorio ? relatorio.descricao_modificada : "");

    useEffect(() => {
        if (relatorio) {
            setTopico(relatorio.titulo);
            setTempoEmMinutos(relatorio.minutos);
            setDescricao(relatorio.descricao || "");
            setTopicoModificado(relatorio.titulo_modificado);
            setTempoEmMinutosAlterados(relatorio.minutos_modificada);
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

            {(tempoEmMinutosAlterados !== 0 && tempoEmMinutosAlterados !== tempoEmMinutos) ? (
                    <div style={{width: "100%"}}>
                        <FormularioTempoComCheck
                            label={"Horas"}
                            placeholder={tempoEmMinutosAlterados}
                            type={"number"}
                            value={tempoEmMinutosAlterados}
                        />
                        <FormularioTempoSemCheck
                            label={""}
                            placeholder={tempoEmMinutos}
                            type={"number"}
                        />
                    </div>
                ) :
                <FormularioTempoComCheck
                    label={"Horas"}
                    placeholder={tempoEmMinutos + "h"}
                    type={"number"}
                    value={tempoEmMinutos}
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
