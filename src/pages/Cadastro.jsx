import {useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import {auth} from "../config/Firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import TextoAzul from "../components/Elementos/Textos/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";

const Cadastro = () => {
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
            <Titulo>
                Cadastro
            </Titulo>

            <div style={{width: '100%'}}>
                <TextoAzul>
                    Nome Completo
                </TextoAzul>
                <Input
                    placeholder="Digite seu nome"
                />
            </div>

            <div style={{width: '100%'}}>
                <TextoAzul>
                    Matricula
                </TextoAzul>
                <Input
                    placeholder="Digite sua matricula"
                />
            </div>

            <div style={{width: '100%'}}>
                <TextoAzul>
                    Email
                </TextoAzul>
                <Input
                    placeholder="Digite seu email"
                />
            </div>

            <div style={{width: '100%'}}>
                <TextoAzul>
                    Senha
                </TextoAzul>
                <Input
                    placeholder="Digite sua senha"
                    type={"password"}
                />
            </div>

            <BotaoPrimario
                onClick={() => navigate('/')}
            >
                Cadastrar
            </BotaoPrimario>
        </Base>
    )
}

export default Cadastro;