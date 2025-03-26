import Cookies from "js-cookie";

async function fetchRelatorioPorMatricula(matricula) {
    const url = `https://okkarelatorio.fly.dev/api/relatorios/${matricula}/`;
    const csrftoken = Cookies.get('csrftoken');

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken,
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar relatório');
        }

        const data = await response.json();

        // Aqui estamos assumindo que a resposta é uma lista de relatórios
        const relatorios = data.map(relatorio => ({
            id: relatorio.id,
            colaborador: relatorio.colaborador,
            diretor: relatorio.diretor,
            titulo: relatorio.titulo,
            titulo_modificado: relatorio.titulo_modificado,
            descricao: relatorio.descricao,
            descricao_modificada: relatorio.descricao_modificada,
            data_criacao: relatorio.data_criacao,
            data_modificacao: relatorio.data_modificacao,
            hora: relatorio.hora,
            hora_modificada: relatorio.hora_modificada,
            setor: relatorio.setor,
            aprovado_direroria: relatorio.aprovado_direroria,
            aprovado_presidencia: relatorio.aprovado_presidencia,
        }));

        return relatorios;
    } catch (error) {
        console.error('Erro ao buscar os dados do relatório:', error);
        return null; // Retorna null em caso de erro
    }
}

export default fetchRelatorioPorMatricula;
