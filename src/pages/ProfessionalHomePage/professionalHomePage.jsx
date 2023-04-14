import './professionalHomePage.css';
import AnnouncementIcon from '../../assets/announcementIcon.svg';
import EditProfileIcon from '../../assets/editProfileIcon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProfessionalHomePage() {

    const [arrayCredit, setArrayCredit] = useState([{ currentCredit: 0 }, { usedCredit: 0 }]);
    // const [arrayCredi, setArrayCredit] = useState([{ currentCredit: 0 }, { usedCredit: 0 }]);
    // const [arrayCredit, setArrayCredit] = useState([{ currentCredit: 0 }, { usedCredit: 0 }]);

    return (
        <div className='container-professional-homePage'>

            <div className='container-professional-homePage-welcome'>
                <h2>Bem-Vindo</h2>
                <h4>email do usuário</h4>
            </div>

            <div className='container-professional-homePage-options'>

                <div className='container-card-professional-homePage-options-announcement'>
                    <div className='container-card-professional-homePage-options-announcement-title'>
                        <div
                            style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                style={{ width: '2rem' }}
                                src={AnnouncementIcon}
                                alt="incone de um papel" />
                            <Link
                                className='link'
                                to={'/your-ads-professional'}>
                                <h4
                                    style={{ paddingTop: '0.4rem', color: '#800080' }}>
                                    Seus Anuncios
                                </h4>
                            </Link>

                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '600',
                            color: '#800080'
                        }}>
                            &gt;
                        </h1>

                    </div>
                    <div className='container-card-professional-homePage-options-announcement-detail'>

                        <div className='container-card-professional-homePage-options-announcement-detail-pSpan'>
                            <p>
                                Ativos
                            </p>
                            <span>
                                0
                            </span>
                        </div>
                        <div className='container-card-professional-homePage-options-announcement-detail-pSpan'>

                            <p>
                                Não Publicados
                            </p>
                            <span>
                                0
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container-professional-homePage-options'>
                <div
                    className='container-card-professional-homePage-options-credit'>
                    <div className='container-card-professional-homePage-options-credit-title'>
                        <div
                            style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                style={{ width: '2rem' }}
                                src={AnnouncementIcon}
                                alt="incone de um papel" />
                            <Link
                                className='link'
                                to={'/credits-Professional'}>
                                <h4
                                    style={{ paddingTop: '0.4rem', color: '#800080' }}>
                                    Crédito
                                </h4>
                            </Link>

                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '600',
                            color: '#800080'
                        }}>
                            &gt;
                        </h1>

                    </div>
                    <div className='container-card-professional-homePage-options-credit-detail'>

                        <div className='container-card-professional-homePage-options-credit-detail-pSpan'>
                            <p>
                                Créditos atuais
                            </p>
                            <span>
                                {arrayCredit[0].currentCredit}
                            </span>
                        </div>
                        <div className='container-card-professional-homePage-options-credit-detail-pSpan'>

                            <p>
                                Créditos usados
                            </p>
                            <span>
                                {arrayCredit[1].usedCredit}
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container-professional-homePage-options'>
                <div
                    className='container-card-professional-homePage-options-product'>
                    <div className='container-card-professional-homePage-options-product-title'>
                        <div
                            style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                style={{ width: '2rem' }}
                                src={AnnouncementIcon}
                                alt="incone de um papel" />

                            <Link
                                className='link'
                                to={'/our-plans'}>
                                <h4
                                    style={{ paddingTop: '0.4rem', color: '#800080' }}>
                                    Nossos Planos
                                </h4>
                            </Link>

                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '600',
                            color: '#800080'
                        }}>
                            &gt;
                        </h1>

                    </div>
                    <div className='container-card-professional-homePage-options-product-detail'>

                        <div className='container-card-professional-homePage-options-product-detail-pSpan'>
                            <p>
                                Compre nossos produtos para estar sempre no topo
                            </p>
                            <span>
                                0
                            </span>
                        </div>


                    </div>
                </div>
            </div>

            <div className='container-professional-homePage-options'>
                <div
                    className='container-card-professional-homePage-options-editProfile'>
                    <div className='container-card-professional-homePage-options-editProfile-title'>
                        <div
                            style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                style={{ width: '2rem' }}
                                src={EditProfileIcon}
                                alt="incone de um papel" />
                            <Link
                                className='link'
                                to={'/edit-profileProfessional'}>
                                <h4
                                    style={{ paddingTop: '0.4rem', color: '#800080' }}>
                                    Editar Perfil
                                </h4>
                            </Link>

                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '600',
                            color: '#800080'
                        }}>
                            &gt;
                        </h1>

                    </div>
                    <div className='container-card-professional-homePage-options-editProfile-detail'>

                        <div className='container-card-professional-homePage-options-editProfile-detail-pSpan'>
                            <p>
                                Gerencie suas informações pessoais.
                            </p>

                        </div>


                    </div>
                </div>
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

export default ProfessionalHomePage;