import Header from "./Header";

const Softskill = ({ setPagina }) => {
    return (
        <div>
            <Header setPagina={setPagina} />
            <main>
                <section class="intro">
                    <h2 class="boas-vindas-menu">
                        Você já ouviu falar em Soft Skills ou Hard Skills? Nesta seção iremos focar nas
                        Soft Skills mais valorizadas nos profissionais da àrea da tecnlogia (TI), bem como
                        maneiras de desenvolve-las!
                        <br />
                        <br />
                        Soft Skills diz respeito às halibidades comportamentais dos trabalhadores, elas são
                        importantíssimas para se trabalhar em qualquer empresa, pois estão ligadas a capacidade
                        de lidar com emoções frente a desafios e problemas. Dunante os processos seletivos
                        cada uma dessas habilidades é observada com atenção no canditado à vaga do emprego,
                        juntamente com as Hard Skills, mas estas são as capacidades técnicas, ambas cruciais
                        de serem desenvolvidas pelos indivíduos, afinal, demostra seus conhecimentos no
                        ramo e características emocionais/comportamentais para se relacionar com colegas...
                        <br />
                        <br />
                        Fizemos um questionário que foi respondido por atuantes do ramo
                        tecnológico que tem, por foco principal, a coleta de dados sobre a
                        atuação, desafios, experiência e opiniões desses profissionais a respeito de sua área
                        de ocupação, vamos analisar suas respostas a seguir.
                    </h2>
                </section>
            </main>
        </div>
    )
}

export default Softskill;