import Cookies from "js-cookie";

const enviarRelatorio = async (colaborador, setor, titulo, descricao, hora) => {
    const csrftoken = Cookies.get('csrftoken');
    const username = localStorage.getItem("matricula");
    const password = localStorage.getItem("password");

    console.log("CSRF Token:", csrftoken);  // Verifica o token
    const diretor = "admin";  // Define o cargo do diretor

    try {
        const authHeader = 'Basic ' + btoa(`${username}:${password}`);
        console.log("Authorization Header:", authHeader);  // Verifica o cabeçalho de autorização

        const response = await fetch('https://okkarelatorio.fly.dev/api/relatorios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader,  // Adicionando o cabeçalho de autenticação básica
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                colaborador,
                setor,
                titulo,
                descricao,
                hora,
                diretor
            })
        });

        console.log("Response Status:", response.status);  // Verifica o status da resposta

        if (response.ok) {
            console.log("Relatório enviado com sucesso!");  // Confirma o sucesso
            return true;
        } else {
            const data = await response.json();
            console.log("Resposta da API (Erro):", data);  // Log do erro completo
            console.error("Erro:", data.detail || data);  // Log detalhado da resposta com erro
            return false;
        }
    } catch (error) {
        console.error("Erro ao enviar relatório:", error);  // Log de erro no fetch
        return false;
    }
};

export default enviarRelatorio;
