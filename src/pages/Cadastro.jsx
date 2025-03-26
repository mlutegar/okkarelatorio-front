import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "./Base";
import Titulo from "../components/Elementos/Textos/Titulo/Titulo";
import TextoAzul from "../components/Elementos/Textos/TextoAzul/TextoAzul";
import Input from "../components/Input/Input";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import cadastro from "../api/cadastro";

const Cadastro = () => {
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleCadastro = async (event) => {
        event.preventDefault();

        if(await cadastro(matricula, nome, email, password)){
            navigate('/login');
        }
    };

    return (
        <Base>
            <Titulo>Cadastro</Titulo>
            <form onSubmit={handleCadastro} style={{ width: '100%', display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center"}}>
                <div style={{width: '100%'}}>
                    <TextoAzul>Nome Completo</TextoAzul>
                    <Input
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div style={{width: '100%'}}>
                    <TextoAzul>Matricula</TextoAzul>
                    <Input
                        placeholder="Digite sua matricula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                </div>

                <div style={{width: '100%'}}>
                    <TextoAzul>Email</TextoAzul>
                    <Input
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div style={{width: '100%'}}>
                    <TextoAzul>Senha</TextoAzul>
                    <Input
                        placeholder="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <BotaoPrimario type="submit">
                    Cadastrar
                </BotaoPrimario>
            </form>
        </Base>
    );
};

export default Cadastro;
