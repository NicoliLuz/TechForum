import Header from "./Header";

const Sobre = ({ setPagina }) => {
    return (
        <div>
            <Header setPagina={setPagina} />
            <main>
                <section class="intro">
                    <h2 class="boas-vindas">
                        O TechFórum foi criado para mostrar os mais variados dados sobre TI
                        e ajudar os jovens que desejam ingressar nesse setor.

                        Aqui você pode encontrar as principais ramificações da TI, médias salariais,
                        empresas do Rio Grande do Sul, soft skills mais procuradas no mercado e debates
                        sobre automação x desemprego tecnológico.
                    </h2>
                    <h2 class="boas-vindas-img">
                        <img src="./images/robo.png" class="boas-vindas-img-robo" />
                    </h2>
                </section>
            </main>
        </div>
    )
}

export default Sobre;


