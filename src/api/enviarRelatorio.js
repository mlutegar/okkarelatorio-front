import Cookies from "js-cookie";

const enviarRelatorio = async (colaborador, setor, titulo, descricao, hora) => {
    console.log("Iniciando enviarRelatorio com parâmetros:");
    console.log("colaborador:", colaborador);
    console.log("setor:", setor);
    console.log("titulo:", titulo);
    console.log("descricao:", descricao);
    console.log("hora:", hora);
    console.log("tipo da hora:", typeof hora);

    const csrftoken = Cookies.get('csrftoken');
    console.log("csrftoken obtido:", csrftoken);

    const username = localStorage.getItem("matricula");
    const password = localStorage.getItem("password");
    console.log("username obtido:", username);
    console.log("password obtido (comprimento):", password ? password.length : 'não definido');

    const diretor = "admin";  // Define o cargo do diretor
    console.log("diretor:", diretor);

    try {
        console.log("Preparando para fazer a requisição");
        const authHeader = 'Basic ' + btoa(`${username}:${password}`);
        console.log("authHeader criado (primeiros 10 caracteres):", authHeader.substring(0, 10) + "...");

        const bodyData = {
            colaborador,
            setor,
            titulo,
            descricao,
            minutos: hora,
            diretor
        };
        console.log("Corpo da requisição preparado:", bodyData);

        console.log("URL da requisição:", 'https://okkarelatorio.fly.dev/api/relatorios/');
        console.log("Iniciando fetch...");

        const response = await fetch('https://okkarelatorio.fly.dev/api/relatorios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader,
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify(bodyData)
        });

        console.log("Resposta recebida:");
        console.log("Status:", response.status);
        console.log("Status text:", response.statusText);
        console.log("Headers:", [...response.headers.entries()]);

        if (response.ok) {
            console.log("Requisição bem-sucedida!");
            return true;
        } else {
            console.log("Requisição falhou com status:", response.status);
            const responseText = await response.text();
            console.log("Resposta bruta:", responseText);

            try {
                const data = JSON.parse(responseText);
                console.error("Detalhes do erro:", data.detail || data);
                return false;
            } catch (jsonError) {
                console.error("Erro ao parsear resposta JSON:", jsonError);
                console.error("Resposta não é um JSON válido:", responseText);
                return false;
            }
        }
    } catch (error) {
        console.error("Erro na execução do fetch:", error);
        console.error("Stack trace:", error.stack);
        return false;
    }
};

export default enviarRelatorio;