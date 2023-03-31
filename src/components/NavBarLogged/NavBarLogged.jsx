import './NavBarLogged.css';
import { Link, Outlet } from 'react-router-dom';
import UserProviderNavBar from '../../contexts/UserContextNavBar';


function NavBarLogged() {
    return (
        <UserProviderNavBar>
            <div className='container-NavBarLogged'>
                <nav>
                    <div className='container-NavBarLogged-main'>
                        <h1>LogoVipList</h1>
                        <div className='container-link'>
                            <Link
                                className='customization-Link'
                                to='/sign-in'>Fazer login</Link>
                            <Link
                                className='customization-Link'
                                to='/sign-up'>Cadastre-se</Link>
                            <button
                                className='button-announce'
                            >Publicar seu Anúncio</button>
                        </div>

                        <div className='container-NavBarLogged-main-media400'>
                            <input type="checkbox" id='nav' />
                            <label htmlFor="nav" aria-label='Abrir o menu'></label>
                        </div>


                    </div>
                    <div className='container-NavBarLogged-search'>

                        <select name="" className="customization-option">Categoria
                            <option value="">Acompanhates</option>
                        </select>
                        <input type="text" placeholder='  Pesquise aqui ...' />
                        <button>PESQUISAR ...</button>
                        <img
                            className='container-NavBarLogged-search-media888'
                            src='https://img.freepik.com/fotos-gratis/3d-rendem-de-morph-homem-que-procurara-com-lupa_1048-2931.jpg?w=2000'
                        ></img>
                    </div>

                </nav>

                <div className='container-navBar-outlet'>
                    <Outlet />
                </div>
            </div >
        </UserProviderNavBar >
    )
}

export default NavBarLogged;