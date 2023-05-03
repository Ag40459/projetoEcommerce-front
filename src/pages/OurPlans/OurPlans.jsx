import { Link } from 'react-router-dom';
import './ourPlans.css';

function OurPlans() {
    return (
        <div className='container-ourPlans'>
            <div className='container-back-page'>
                <Link className='link' to='#' onClick={() => window.history.back()}>
                    Página Anterior
                </Link>
            </div>
            <h1>Conheça Nossos Planos</h1>
            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>
            </footer>
        </div>
    )
}

export default OurPlans;