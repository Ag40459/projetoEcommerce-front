import CardCategory from '../../components/CardCategory/CardCategory';
import './initial.css';

function Initial() {
    return (
        <div className='container-initial'>
            <div className='container-initial-title'>
                <h1>
                    Uma nova forma de Comprar
                </h1>
                <h3>
                    Tenha um encontro hoje em sua cidade, escolha sua categoria
                </h3>
            </div>
            <div className='container-initial-cards'>
                <CardCategory />
                <CardCategory />
                <CardCategory />
            </div>
            <div className='container-initial-information'>
                <p>
                    Seja bem-vindo ao portal de classificados eróticos Vip List. Entre os anúncios que pode ver na web, com certeza encontrará a pessoa ideal. Quer esteja à procura de acompanhantes ou de sexo virtual no Brasil. Navegue entre todas as categorias, mulheres e homens, acompanhantes, travestis, gay, casal, troca de casais, mulher procura mulher, lésbicas e pessoas que buscam amor. Poderá conhecer pessoas parecidas com você, que procuram o mesmo e contatá-las. Em Vip List pode criar seu própio anúncio grátis. Não espere mais, verá que tudo fica mais fácil depois que iniciar, dê o primeiro passo.
                </p>
            </div>
            <footer>
                <div className='container-initial-baseBoard'>
                    <a href="">Termos e Condições</a>
                    <a href="">Politica de Privacidade</a>
                    <a href="">Fale Conosco</a>
                    <a id='end' href="">Promover seus Anúncios</a>

                </div>
            </footer>
        </div>
    )
}

export default Initial;