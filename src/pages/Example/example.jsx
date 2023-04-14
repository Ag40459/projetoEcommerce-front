import { Link } from 'react-router-dom';
import './example.css';

function Example() {
    return (
        <div className='container-example'>
            <div className='container-back-page'>
                <Link className='link' to='/'>
                    Voltar
                </Link>
            </div>
            <h1>Example</h1>
            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>
            </footer>
        </div>
    )
}

export default Example;