import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import TextoAzul from "../components/Elementos/Textos/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import login from "../api/login";

const Login = () => {
    const navigate = useNavigate();
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(null);

    const handleLogin = async () => {
        const sucesso = await login(matricula, senha);
        if (sucesso) {
            navigate('/');
        } else {
            setErro("Usuário ou senha incorretos.");
        }
    };

    return (
        <Base>
            <Titulo>Login</Titulo>

            <div style={{ width: '100%' }}>
                <TextoAzul>Matricula</TextoAzul>
                <Input
                    placeholder="Digite sua matricula"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                />
            </div>

            <div style={{ width: '100%' }}>
                <TextoAzul>Senha</TextoAzul>
                <Input
                    placeholder="Digite sua senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            {erro && <div style={{ color: 'red' }}>{erro}</div>}

            <BotaoPrimario onClick={handleLogin}>
                Login
            </BotaoPrimario>

            <BotaoSecundario onClick={() => navigate('/cadastro')}>
                Cadastro
            </BotaoSecundario>
        </Base>
    );
};

export default Login;
