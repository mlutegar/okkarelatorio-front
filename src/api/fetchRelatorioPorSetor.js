import Cookies from "js-cookie";
import getColaboradorFirstName from "./getColaboradorFirstName";

async function fetchRelatorioPorSetor(setor) {
    const url = `https://okkarelatorio.fly.dev/api/relatorios/setor/${setor}/`; // URL para buscar por setor
    const csrftoken = Cookies.get('csrftoken');

    const pegarFirstNameColaboradorPorMatricula = (matricula) => {

    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken,
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar relatório por setor');
        }

        const data = await response.json();

        // Filtra os relatórios onde aprovado_direroria é falso
        const relatorios = data
            .filter(relatorio => relatorio.aprovado_direroria === false) // Filtragem
            .map(relatorio => ({
                id: relatorio.id,
                colaborador: relatorio.colaborador,
                diretor: relatorio.diretor,
                titulo: relatorio.titulo,
                titulo_modificado: relatorio.titulo_modificado,
                descricao: relatorio.descricao,
                descricao_modificada: relatorio.descricao_modificada,
                data_criacao: relatorio.data_criacao,
                data_modificacao: relatorio.data_modificacao,
                minutos: relatorio.minutos,
                minutos_modificada: relatorio.minutos_modificada,
                setor: relatorio.setor,
                aprovado_direroria: relatorio.aprovado_direroria,
                aprovado_presidencia: relatorio.aprovado_presidencia,
            }));

        for (let relatorio of relatorios) {
            const matriculaColaborador = relatorio.colaborador;
            const matriculaDiretor = relatorio.diretor;

            const nomeColaborador = await getColaboradorFirstName(matriculaColaborador);
            const nomeDiretor = await getColaboradorFirstName(matriculaDiretor);

            relatorio.colaborador = nomeColaborador;
            relatorio.diretor = nomeDiretor;
        }

        return relatorios;
    } catch (error) {
        console.error('Erro ao buscar os dados do relatório:', error);
        return null; // Retorna null em caso de erro
    }
}

export default fetchRelatorioPorSetor;
