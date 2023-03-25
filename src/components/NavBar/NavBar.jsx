import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';


let currentPath = window.location.pathname
console.log(currentPath);
function NavBar() {
    return (
        <div className='container-navBar'>
            <nav>
                <h1>LogoVipList</h1>
                {/* <input type="text" placeholder='  Pesquise aqui ...' /> */}
                <div className='container-link'>
                    <Link to='/sign-in'>Login</Link>
                    <Link to='/sign-up'>Cadastre-se</Link>
                </div>

            </nav>

            <div className='container-navBar-outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default NavBar;