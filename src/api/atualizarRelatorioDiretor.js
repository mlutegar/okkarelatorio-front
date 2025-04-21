import Cookies from "js-cookie";

const atualizarRelatorioDiretor = async (id, diretor, hora_modificada, descricao_modificada, titulo_modificado) => {
    const csrftoken = Cookies.get('csrftoken');
    const username = localStorage.getItem("matricula");
    const password = localStorage.getItem("password");

    const authHeader = 'Basic ' + btoa(`${username}:${password}`);
    const json = JSON.stringify({
        diretor,
        minutos_modificada: hora_modificada,
        descricao_modificada,
        titulo_modificado,
        aprovado_direroria: true, // Marca como aprovado pela diretoria
    });

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
            return true;
        } else {
            const data = await response.json();
            return false;
        }
    } catch (error) {
        return false;
    }
};

export default atualizarRelatorioDiretor;
