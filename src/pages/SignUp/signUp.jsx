import './signUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className='container-signup'>
            <h1>SignUp</h1>
            <Link to='/'>Sair</Link>
            <Link to='/categories'>Categorias</Link>
        </div>
    )
}

export default SignUp;