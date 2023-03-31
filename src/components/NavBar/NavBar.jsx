import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';
import UserProviderNavBar from '../../contexts/UserContextNavBar';


let currentPath = window.location.pathname
console.log(currentPath);
function NavBar() {
    return (
        <UserProviderNavBar>
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
        </UserProviderNavBar>
    )
}

export default NavBar;