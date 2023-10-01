export default function SecaoSobre () {
    return (
        <section id="sobre" className="secao-sobre">
            <div className="limita-secao">
                <h2>QUEM SOMOS NÓS?</h2>
                <p className="paragrafo1">Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="box-cards">
                    <img src="./assets/loja.png"/>
                    <div>
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    
                    <div>
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui treinamento para te atender</p>
                    </div>
                    <img src="./assets/atendimento.png"/>
                </div>
            </div>
        </section>
    );
}