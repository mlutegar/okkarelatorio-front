import Cookies from 'js-cookie';
import API_BASE_URL from '../../config';

/**
 * Função para realizar o login do usuário.
 * @param {string} matricula - Matrícula do usuário.
 * @param {string} senha - Senha do usuário.
 * @returns {Promise<boolean>} Retorna true se o login for bem-sucedido, caso contrário, retorna false.
 */
async function login(matricula, senha) {
    const csrftoken = Cookies.get('csrftoken');

    try {
        const response = await fetch(`${API_BASE_URL}/api/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                username: matricula,
                password: senha
            })
        });

        if (response.ok) {
            const data = await response.json();
            // Armazena o token ou realize outras ações necessárias
            localStorage.setItem("token", data.token);
            return true;
        } else {
            // Se houver erro, pode-se tratar a resposta ou logar o erro
            console.warn("Erro no login:", await response.json());
            return false;
        }
    } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
        return false;
    }
}

export default login;
