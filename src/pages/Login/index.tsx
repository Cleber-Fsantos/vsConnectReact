//estilização
import "./style.css";

import secureLocalStorage from "react-secure-storage";

//Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//api
import api from "../../utils/api";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");


    
    function fazerLogin(e:any){
        e.preventDefault();
        const usuario: object = {
            email: email,
            password: senha
        }

        api.post("login", usuario).then((response:any)=> {
            // console.log(response)
            //salva a securite Token
            secureLocalStorage.setItem("user", response.data)

            navigate("/perfil/" + response.data.user.id)

        })
    }

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form onSubmit={ fazerLogin } className="login_formulario" method="POST">
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={ (e) => setEmail(e.target.value) }
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={ (e) => setSenha(e.target.value) }
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;