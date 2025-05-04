import Cookies from "js-cookie";

const enviarRelatorio = async (colaborador, setor, titulo, descricao, hora) => {
    const csrftoken = Cookies.get('csrftoken');
    const username = localStorage.getItem("matricula");
    const password = localStorage.getItem("password");
    const diretor = "admin";  // Define o cargo do diretor

    try {
        const authHeader = 'Basic ' + btoa(`${username}:${password}`);
        const bodyData = {
            colaborador,
            setor,
            titulo,
            descricao,
            minutos: hora,
            diretor
        };
        const response = await fetch('https://okkarelatorio.fly.dev/api/relatorios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader,
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify(bodyData)
        });
        if (response.ok) {
            return true;
        } else {
            const responseText = await response.text();

            try {
                const data = JSON.parse(responseText);
                return false;
            } catch (jsonError) {
                return false;
            }
        }
    } catch (error) {
        return false;
    }
};

export default enviarRelatorio;