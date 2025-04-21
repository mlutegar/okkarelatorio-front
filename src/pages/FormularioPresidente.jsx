import React, {useState, useEffect} from "react";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import {useLocation, useNavigate} from "react-router-dom";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoCancelar from "../components/Elementos/Botoes/BotaoCancelar/BotaoCancelar";
import FormularioComCheck from "../components/Elementos/Input/FormularioComCheck/FormularioComCheck";
import FormularioTextAreaSemCheck
    from "../components/Elementos/Input/FormularioTextAreaSemCheck/FormularioTextAreaSemCheck";
import FormularioSemCheck from "../components/Elementos/Input/FormularioSemCheck/FormularioSemCheck";
import FormularioTextAreaComCheck
    from "../components/Elementos/Input/FormularioTextAreaComCheck/FormularioTextAreaComCheck";
import atualizarRelatorioPresidente from "../api/atualizarRelatorioPresidente";
import FormularioTempoComCheck from "../components/Elementos/Input/FormularioTempoComCheck/FormularioTempoComCheck";
import FormularioTempoSemCheck from "../components/Elementos/Input/FormularioTempoSemCheck/FormularioTempoSemCheck";

const FormularioPresidente = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {relatorio} = location.state || {};

    const [idRelatorio, setId] = useState(relatorio ? relatorio.id : "");
    const [topico, setTopico] = useState(relatorio ? relatorio.titulo : "");
    const [tempoEmMinutos, setTempoEmMinutos] = useState(relatorio ? relatorio.minutos : 0);
    const [descricao, setDescricao] = useState(relatorio ? relatorio.descricao : "");

    const [topicoModificado, setTopicoModificado] = useState(relatorio ? relatorio.titulo_modificado : "");
    const [tempoEmMinutosAlterados, setTempoEmMinutosAlterados] = useState(relatorio ? relatorio.minutos_modificada : 0);
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
            setTempoEmMinutos(relatorio.minutos);
            setDescricao(relatorio.descricao || "");
            setTopicoModificado(relatorio.titulo_modificado);
            setTempoEmMinutosAlterados(relatorio.minutos_modificada);
            setDescricaoModificada(relatorio.descricao_modificada);
            setColaborador(relatorio.colaborador);
            setDiretor(relatorio.diretor);
        }
    }, [relatorio]);

    // Verifica se todos os campos tiveram seu check definido
    const isFormValid = checkStatusTopico !== null && checkStatusHoras !== null && checkStatusDescricao !== null;

    const handleEnviar = () => {
        console.log("Enviando relatório...");

        console.log("Topico:", topico);
        console.log("tempoEmMinutos:", tempoEmMinutos);
        console.log("Descrição:", descricao);

        console.log("Topico Modificado:", topicoModificado);
        console.log("Horas Modificado:", tempoEmMinutosAlterados);
        console.log("Descrição Modificada:", descricaoModificada);

        const id = idRelatorio;
        const matricula = localStorage.getItem('matricula');
        const hora_modificada = tempoEmMinutosAlterados;
        const descricao_modificada = descricaoModificada;
        const titulo_modificado = topicoModificado;

        const success = atualizarRelatorioPresidente(id, matricula, hora_modificada, descricao_modificada, titulo_modificado);

        if (success) {
            navigate('/');
        } else {
            alert("Falha ao enviar relatório");
        }
    };

    return (
        <Base>
            <Titulo>FORMULÁRIO</Titulo>

            {(topicoModificado !== "") ? (
                    <div style={{width: "100%"}}>
                        <FormularioComCheck
                            label={"Tópico"}
                            placeholder={topicoModificado}
                            type={"text"}
                            onCheckChange={setCheckStatusTopico}
                            value={topicoModificado}
                            setValue={setTopicoModificado}
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
                    onCheckChange={setCheckStatusTopico}
                    value={topicoModificado}
                    setValue={setTopicoModificado}
                />
            }

            {(tempoEmMinutosAlterados !== tempoEmMinutos) ? (
                    <div style={{width: "100%"}}>
                        <FormularioTempoComCheck
                            label={"Tempo dedicado"}
                            valorPadrao={tempoEmMinutos} // Valor padrão em minutos
                            onCheckChange={setCheckStatusHoras}
                            value={tempoEmMinutosAlterados}
                            setValue={setTempoEmMinutosAlterados}
                        />
                        <FormularioTempoSemCheck
                            label={"Tempo registrado"}
                            valorInicial={tempoEmMinutos} // Valor em minutos que será exibido como horas:minutos
                        />
                    </div>
                ) :
                <FormularioTempoComCheck
                    label={"Tempo dedicado"}
                    valorPadrao={tempoEmMinutos} // Valor padrão em minutos
                    onCheckChange={setCheckStatusHoras}
                    value={tempoEmMinutosAlterados}
                    setValue={setTempoEmMinutosAlterados}
                />
            }

            {(descricaoModificada !== "") ? (
                    <div style={{width: "100%"}}>
                        <FormularioTextAreaComCheck
                            label={"Descrição"}
                            placeholder={descricaoModificada}
                            onCheckChange={setCheckStatusDescricao}
                            value={descricaoModificada}
                            setValue={setDescricaoModificada}
                        />
                        <FormularioTextAreaSemCheck
                            label={""}
                            placeholder={descricao}
                            onCheckChange={setCheckStatusDescricao}
                        />
                    </div>
                ) :
                <FormularioTextAreaComCheck
                    label={"Descrição"}
                    placeholder={descricao}
                    onCheckChange={setCheckStatusDescricao}
                    value={descricaoModificada}
                    setValue={setDescricaoModificada}
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
