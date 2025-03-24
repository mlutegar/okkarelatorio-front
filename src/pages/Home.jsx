import Base from "./Base"
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const tipo = localStorage.getItem("tipo");

        if (!token) {
            navigate("/colaborador");
        }

        if (tipo === "professor") {
            navigate("/professor");
        }

    }, [navigate]);
  

  return (
    <Base>
        <Titulo>
            HISTÓRICO
        </Titulo>
    </Base>
  )
}

export default Home