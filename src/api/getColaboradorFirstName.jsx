import Cookies from "js-cookie";
import API_BASE_URL from "../../config";

const getColaboradorFirstName = async (matricula) => {
    const csrftoken = Cookies.get('csrftoken');
    const response = await fetch(`${API_BASE_URL}/api/informacao-usuario/${matricula}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken,
        },
    });

    if (!response.ok) {
        return "";
    }

    const data = await response.json();
    const nomeColaborador = data[0].first_name;
    return nomeColaborador;
}

export default getColaboradorFirstName;