import './NavBarInitial.css';
import { Link, Outlet } from 'react-router-dom';

function NavBarInitial() {
    return (
        <div className='container-navBarInitial'>
            <nav>
                <div className='container-navBarInitial-main'>
                    <h1>LogoVipList</h1>
                    <div className='container-link'>
                        <Link to='/sign-in'>Login</Link>
                        <Link to='/sign-up'>Cadastre-se</Link>
                        <button>Publicar seu Anúncio</button>

                    </div>
                </div>
                <div className='container-navBarInitial-search'>

                    <select name="" id="">Categoria
                        <option value="">Acompanhates</option>
                    </select>
                    <input type="text" placeholder='  Pesquise aqui ...' />
                    <button>Pesquisar</button>
                </div>

            </nav>

            <div className='container-navBar-outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default NavBarInitial;