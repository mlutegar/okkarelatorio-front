import Cookies from 'js-cookie';
import API_BASE_URL from '../../config';
import fetchAndSaveUser from "./username";

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
            localStorage.setItem("token", data.token);
            localStorage.setItem("matricula", matricula);
            localStorage.setItem("password", senha);

            if (await fetchAndSaveUser(matricula)) {
                return true;
            }

            console.error("Erro ao buscar e salvar os dados do usuário");
            return false;
        } else {
            console.warn("Erro no login:", await response.json());
            return false;
        }
    } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
        return false;
    }
}

export default login;
