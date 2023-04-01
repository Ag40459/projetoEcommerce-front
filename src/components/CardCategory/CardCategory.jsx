import { Link } from 'react-router-dom';
import './CardCategory.css';

function CardCategory() {
    return (
        <div className='container-cardCategory'>

            <Link
                className='container-cardCategory-customization-Link'
                to="/categories">
                <img
                    src="https://i.pinimg.com/originals/99/90/f3/9990f3ee805370095ac067bb6d3f68fe.jpg" alt="foto de uma mulher" />
            </Link>
            <Link
                className='container-cardCategory-customization-Link'
                to="/categories">
                <div
                    className='container-cardCategory-category'>
                    <h2>
                        Acompanhantes
                    </h2>
                </div>
            </Link>
            <div
                className='container-cardCategory-description'>
                <h3>
                    Encontre as melhores acompanhantes do Brasil, que te oferecem grande variedade de serviços eróticos. Não espere mais!
                </h3>
            </div>
        </div>
    )
}

export default CardCategory;