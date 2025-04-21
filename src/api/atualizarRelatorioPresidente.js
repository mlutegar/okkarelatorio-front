import Cookies from "js-cookie";

const atualizarRelatorioPresidente = async (id, presidente, hora_modificada, descricao_modificada, titulo_modificado) => {
    const csrftoken = Cookies.get('csrftoken');
    const username = localStorage.getItem("matricula");
    const password = localStorage.getItem("password");

    const authHeader = 'Basic ' + btoa(`${username}:${password}`);
    const json = JSON.stringify({
        presidente,
        minutos_modificada: hora_modificada,
        descricao_modificada,
        titulo_modificado,
        aprovado_presidencia: true, // Marca como aprovado pela diretoria
    });

    console.log("Atualizações: " + json);

    try {
        const response = await fetch(`https://okkarelatorio.fly.dev/api/relatorios/${id}/custom-update/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader, // Adicionando o cabeçalho de autenticação básica
                "X-CSRFToken": csrftoken,
            },
            body: json,
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

export default atualizarRelatorioPresidente;
