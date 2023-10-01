export default function SecaoProdutos () {
    return (
        <section id="produtos" className="secao-produtos">
            <div className="limita-secao">
                <h2>Nossos produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <figure>
                    <div className="cards">
                        <h3>Óculos de grau</h3>
                        <img src="./assets/oculos01.png"/>
                        <p>R$ 500,00</p>
                    </div>
                    <div className="cards">
                        <h3>Óculos transition</h3>
                        <img src="./assets/oculos02.png"/>
                        <p>R$ 750,00</p>
                    </div>
                    <div className="cards">
                        <h3>Óculos de sol</h3>
                        <img src="./assets/oculos03.png"/>
                        <p>R$ 700,00</p>
                    </div>
                    <div className="cards">
                        <h3>Óculos infantil</h3>
                        <img src="./assets/oculos04.png"/>
                        <p>R$ 500,00</p>
                    </div>
                </figure>

                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}