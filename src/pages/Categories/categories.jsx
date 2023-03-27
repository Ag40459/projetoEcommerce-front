import './categories.css';
import { Link } from 'react-router-dom';
import CardProfile from '../../components/CardProfile/cardProfile'


function categories() {
    return (
        <div className='container-categories'>
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <Link to='/'>Sair</Link>
        </div>
    )
}

export default categories;