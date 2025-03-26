import Cookies from 'js-cookie';
import API_BASE_URL from '../../config';

async function fetchAndSaveUser(username) {
    const csrftoken = Cookies.get('csrftoken');

    try {
        const response = await fetch(`${API_BASE_URL}/api/user/${username}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken,
                },
            }
        );

        if (!response.ok) {
            console.error('Erro na requisição:', response.status);
            return false;
        }

        const data = await response.json();
        const {username: first_name, setor, cargo, email} = data;

        localStorage.setItem("first_name", first_name);
        localStorage.setItem("setor", setor);
        localStorage.setItem("cargo", cargo);
        localStorage.setItem("email", email);

        return true;
    } catch (error) {
        console.error('Erro ao buscar e salvar os dados do usuário:', error);
        return false;
    }
}

export default fetchAndSaveUser;
