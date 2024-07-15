const Header = ({ setPagina }) => {

    return (
        <header>
            <a href="index.html">
                <h1>TechFórum</h1>
            </a>

            <div class="buttons">
                <a onClick={() => setPagina('sobre')}><button>Sobre</button></a>

                <div class="dropdown">
                    <button class="dropbtn">Menu</button>
                    <div class="dropdown-content">
                        <a onClick={() => setPagina('ramificacoes')}>Ramificações</a>
                        <a onClick={() => setPagina('mediaSalarial')}>Média Salarial</a>
                        <a onClick={() => setPagina('empresas')}>Empresas</a>
                        <a onClick={() => setPagina('softskill')}>Soft Skills</a>
                        <a onClick={() => setPagina('automacao')}>Automação</a>
                    </div>
                </div>
                <a href='/signSignUp'><button>Chat</button></a>
            </div>
        </header>
    );
};

export default Header;