import { Link } from 'react-router-dom';
import './CardCategory.css';

function CardCategory() {
    return (
        <div className='container-cardCategory'>

            <Link to="/categories"> <img
                src="https://br.skokka.com/static/img/categories/pt/womenseekmen_repr.jpg" alt="foto de uma mulher" /></Link>
            <Link to="/categories">
                <div className='container-cardCategory-category'>
                    <h2>Acompanhantes</h2>
                </div>
            </Link>
            <div className='container-cardCategory-description'>
                <h3>
                    Encontre as melhores acompanhantes do Brasil, que te oferecem grande variedade de serviços eróticos. Não espere mais!
                </h3>
            </div>
        </div>
    )
}

export default CardCategory;