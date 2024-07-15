import React, { useState } from 'react';

function SignSignUp() {

    return (
        <section class="intro">
            <div id="login">
                <form class="card">
                    <div class="card-header">
                        <h2>Login</h2>
                    </div>
                    <div class="card-content">
                        <div class="card-content-area">
                            <label for="usuario">Usuário</label>
                            <input type="text" id="usuario" autoComplete="off" />
                        </div>
                        <div class="card-content-area">
                            <label for="password">Senha</label>
                            <input type="password" id="password" autoComplete="off" />
                        </div>
                    </div>
                    <div class="card-footer">
                        <input type="submit" value="login" class="submit" />
                        <a href="./cadastroUsuario.html" class="recuperar_senha">Realizar cadastro</a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignSignUp;