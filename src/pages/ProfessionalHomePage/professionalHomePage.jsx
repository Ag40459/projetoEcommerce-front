import './professionalHomePage.css';
import AnnouncementIcon from '../../assets/announcementIcon.svg';
import EditProfileIcon from '../../assets/editProfileIcon.svg';

function ProfessionalHomePage() {
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
                            <h4
                                style={{ paddingTop: '0.4rem' }}
                            >Anúncios</h4>

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
                            <h4
                                style={{ paddingTop: '0.4rem' }}
                            >Crédito</h4>

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
                                Ativos
                            </p>
                            <span>
                                0
                            </span>
                        </div>
                        <div className='container-card-professional-homePage-options-credit-detail-pSpan'>

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
                    className='container-card-professional-homePage-options-product'>
                    <div className='container-card-professional-homePage-options-product-title'>
                        <div
                            style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                style={{ width: '2rem' }}
                                src={AnnouncementIcon}
                                alt="incone de um papel" />
                            <h4
                                style={{ paddingTop: '0.4rem' }}
                            >Produtos</h4>

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
                                Ativos
                            </p>
                            <span>
                                0
                            </span>
                        </div>
                        <div className='container-card-professional-homePage-options-product-detail-pSpan'>

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
                    className='container-card-professional-homePage-options-editProfile'>
                    <div className='container-card-professional-homePage-options-editProfile-title'>
                        <div
                            style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                style={{ width: '2rem' }}
                                src={EditProfileIcon}
                                alt="incone de um papel" />
                            <h4
                                style={{ paddingTop: '0.4rem' }}
                            >Editar Perfil</h4>

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
                                Ativos
                            </p>
                            <span>
                                0
                            </span>
                        </div>
                        <div className='container-card-professional-homePage-options-editProfile-detail-pSpan'>

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