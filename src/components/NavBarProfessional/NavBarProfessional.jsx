import './NavBarProfessional.css';
import EyeOpen from "../../assets/profile.png";
import Search from "../../assets/search.svg";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useNavBarProvider from '../../hooks/useNavBarProvider';

let currentPath = window.location.pathname
console.log(currentPath);
function NavBarProfessional() {
    const [modalOpenCloseMenu, setModalOpenCloseMenu] = useState(false);
    const [modalOpenCloseSearch, setModalOpenCloseSearch] = useState(false);
    const { removeUserLogedId } = useNavBarProvider();
    const navigate = useNavigate();



    const handleExit = async (e) => {
        removeUserLogedId()
        return navigate('/');
    };

    return (
        <div className='container-NavBarProfessional'>
            <nav>
                <div
                    className='container-NavBarProfessional-main'>
                    <img
                        src="data:image/png;base64,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"
                        alt="logomarca" />

                    <div
                        className='container-link'>

                        <button
                            className='button-announce'>
                            <Link
                                className='link'
                                to={'/post-ad'}>
                                Publicar seu Anúncio...
                            </Link>
                        </button>
                    </div>
                    <div
                        className='container-NavBarProfessional-main-menu-media650'>
                        <input
                            type="checkbox"
                            id='nav' />
                        <h3>
                            Nome do Usuário
                        </h3>
                        <img
                            onClick={() => setModalOpenCloseMenu(!modalOpenCloseMenu)}
                            style={{ width: '6rem', cursor: 'pointer' }}
                            src={EyeOpen}
                        >
                        </img>

                    </div>
                </div>
                <div
                    className='container-NavBarProfessional-search'>

                    <select
                        name=""
                        className="customization-option">

                        <option
                            value="">
                            Acompanhates
                        </option>
                    </select>
                    <input
                        type="text"
                        placeholder='  Pesquise aqui ...' />
                    <button>PESQUISAR...

                    </button>
                    <img
                        className='container-NavBarProfessional-search-media888'
                        src={Search}
                        alt='Lupa'
                    ></img>
                </div>

            </nav>

            <div
                style={modalOpenCloseSearch ? { display: 'flex' } : { display: 'none' }}

                className='container-NavBarProfessional-search-media650'>

                <select
                    name=""
                    className="customization-option-search-media650">
                    Categoria
                    <option
                        value="">
                        Acompanhantes
                    </option>
                </select>
                <input
                    type="text"
                    placeholder='  Pesquise aqui ...' />
                <button>PESQUISAR...

                </button>
            </div>
            <div

                style={{ display: 'flex', width: '50vw' }}
            ></div>
            <div
                style={modalOpenCloseMenu ? { display: 'flex' } : { display: 'none' }}
                className='container-NavBarProfessional-main-openMenu-media650'>
                <ul>
                    <button>
                        <Link
                            style={{ color: '#fff' }}
                            className='link'
                            to={'/post-ad'}>
                            PUBLICAR ANÚNCIO
                        </Link>
                    </button>
                    <li
                        style={{ listStyleType: 'none' }}>
                        <Link
                            className='customization-link-prof'
                            to='/professional-home'>
                            PAINEL INICIAL
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none' }}>
                        <Link
                            className='customization-link-prof'
                            to='/your-ads-professional'>
                            SEUS ANÚNCIOS
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none' }}>
                        <Link
                            className='customization-link-prof'
                            to='/credits-Professional'>
                            CRÉDITOS
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none' }}>
                        <Link
                            className='customization-link-prof'
                            to='/our-plans'>
                            NOSSOS PLANOS
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none' }}>
                        <Link
                            className='customization-link-prof'
                            to='/edit-profileProfessional'>
                            EDITAR PERFIL
                        </Link>
                    </li>
                    <li
                        style={{
                            listStyleType: 'none',
                            borderTop: '1px solid lightgray',
                            paddingTop: '1rem'
                        }}>
                        <Link
                            onClick={handleExit}
                            className='customization-link-prof'
                            to='/'>
                            Encerrar sessão
                        </Link>
                    </li>

                    {/* <button
                        className=''>
                    </button> */}
                </ul>
            </div>

            <div className='container-navBar-outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default NavBarProfessional;