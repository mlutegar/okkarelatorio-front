import Base from "./Base"
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const cargo = localStorage.getItem("cargo");

        if (!token) {
            navigate("/login");
        }

        if (cargo === "colaborador") {
            navigate("/colaborador");
        }

        if (cargo === "diretor") {
            navigate("/diretor");
        }

        if (cargo === "presidente") {
            navigate("/presidente");
        }

    }, [navigate]);


    return (
        <Base>
        </Base>
    )
}

export default Home