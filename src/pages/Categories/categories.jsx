import './categories.css';
import { Link } from 'react-router-dom';
import CardProfile from '../../components/CardProfile/cardProfile'


function categories() {
    return (
        <div className='container-categories'>
            <div className='container-categories-meuOptions'>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'>

                    Voltar para Home
                </Link>
            </div>
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />;

            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>

            </footer>
        </div>
    )
}

export default categories;