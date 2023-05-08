import './searchResult.css';
import { Link } from 'react-router-dom';
import CardProfileSearch from '../../components/CardProfileSearch/cardProfileSearch';


function SearchResult() {

    return (
        <div className='container-searchResult'>
            <div className='container-back-page'>
                <Link className='link' to='#' onClick={() => window.history.back()}>
                    Página Anterior
                </Link>
            </div>

            <div className='container-searchResult-cardProfileSearch'>
                <CardProfileSearch />
            </div>

            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>

            </footer>
        </div>
    )
}

export default SearchResult;