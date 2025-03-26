import Cookies from 'js-cookie';
import API_BASE_URL from '../../config';

async function cadastro(matricula, nome, email, senha) {
    const csrftoken = Cookies.get('csrftoken');

    const body = {
        username: matricula,
        first_name: nome,
        email,
        password: senha
    }
    const jsonBody = JSON.stringify(body);

    try {
        const response = await fetch(`${API_BASE_URL}/api/cadastro/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: jsonBody
        });

        const data = await response.json();

        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            return true;
        } else {
            console.warn("Erro no login:", await response.json());
            return false;
        }
    } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
        return false;
    }
}

export default cadastro;
