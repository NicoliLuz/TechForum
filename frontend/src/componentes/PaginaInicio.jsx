import Header from "./Header";

const PaginaInicio = ({ setPagina }) => {
    return (
        <div>
            <Header setPagina={setPagina} />
            <main>
                <section className="intro">
                    <h2 className="boas-vindas">
                        Bem-vindo(a) ao TechFórum, uma aplicação gratuita para
                        ingressantes no setor
                        tecnológico.
                    </h2>
                    <h2 className="boas-vindas-img">
                        <img src="./images/computador.png" className="boas-vindas-img-comp" />
                    </h2>
                </section>

                <section></section>
                <section></section>
            </main>
        </div>
    )
}

export default PaginaInicio;