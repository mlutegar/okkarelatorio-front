import Cookies from "js-cookie";

const atualizarRelatorioDiretor = async (id, diretor, hora_modificada, descricao_modificada, titulo_modificado) => {
    const csrftoken = Cookies.get('csrftoken');
    const username = localStorage.getItem("matricula");
    const password = localStorage.getItem("password");

    const authHeader = 'Basic ' + btoa(`${username}:${password}`);

    try {
        const response = await fetch(`https://okkarelatorio.fly.dev/api/relatorios/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader, // Adicionando o cabeçalho de autenticação básica
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                diretor,
                hora_modificada,
                descricao_modificada,
                titulo_modificado,
                aprovado_direroria: true, // Marca como aprovado pela diretoria
            }),
        });

        if (response.ok) {
            console.log("Relatório atualizado com sucesso!");
            return true;
        } else {
            const data = await response.json();
            console.error("Erro ao atualizar o relatório:", data);
            return false;
        }
    } catch (error) {
        console.error("Erro ao enviar a atualização do relatório:", error);
        return false;
    }
};

export default atualizarRelatorioDiretor;
