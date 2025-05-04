import Cookies from "js-cookie";

async function enviarRelatorioDiretor(diretor, setor, titulo, descricao, hora) {
    const url = `https://okkarelatorio.fly.dev/api/relatorios/`;
    const csrftoken = Cookies.get('csrftoken');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                colaborador: diretor,
                diretor: diretor,
                setor: setor,
                titulo: titulo,
                descricao: descricao,
                minutos: hora,
                aprovado_direroria: true,
                aprovado_presidencia: true
            }),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar relatório');
        }

        return true;
    } catch (error) {
        console.error('Erro ao enviar relatório:', error);
        return false;
    }
}

export default enviarRelatorioDiretor;