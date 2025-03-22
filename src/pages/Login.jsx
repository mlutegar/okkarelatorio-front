import {useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import {auth} from "../config/Firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import Base from "./Base";
import Logo from "../components/Logo/Logo";
import TextoHeader from "../components/TextoHeader/TextoHeader";
import Titulo from "../components/Titulo/Titulo";
import TextoAzul from "../components/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/BotaoPrimario/BotaoPrimario";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Base>
            <Titulo
                titulo="Login"
            />

            <TextoAzul>
                Email
            </TextoAzul>
            <Input/>

            <TextoAzul>
                Senha
            </TextoAzul>
            <Input/>

            <BotaoPrimario/>
        </Base>
    )
}

export default Login;