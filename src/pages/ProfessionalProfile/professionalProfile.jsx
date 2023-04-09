import { Link } from 'react-router-dom';
import './professionalProfile.css';
import ImgTeste from '../../assets/fotoTeste.jpg'
import IconLeft from '../../assets/arrow-left.svg'

function ProfessionalProfile() {
    return (
        <div className='container-professionalProfile'>
            <div className='container-professionalProfile-back'>
                <img
                    style={{ width: '1rem' }}
                    src={IconLeft} alt="seta para esquerda" />
                <Link to='/categories'>
                    Voltar
                </Link>
            </div>
            <div>
                <div className='container-professionalProfile-description'>
                    <div className='container-professionalProfile-description-information'>
                        <div
                            style={{ display: 'flex', gap: '2rem' }}>
                            <p>Data</p>
                            <p>Plus</p>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <p>22</p>
                            <p>Acompanhante</p>
                            <p>Recife</p>
                        </div>
                    </div>
                    <div className='container-professionalProfile-description-information-titleDescription'>
                        <h1>Nome do Profissional</h1>
                        <p>Descrição feito pelo usuário Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio totam alias laboriosam iure eligendi magni iste perferendis. Sapiente quis, recusandae nemo atque, natus molestias, ea modi ad quia voluptate veniam!</p>
                    </div>

                    <div
                        className='container-professionalProfile-image'>
                        <img
                            src={ImgTeste}
                            alt="mulher sorrindo" />
                        <img src={ImgTeste}
                            alt="mulher sorrindo" />
                        <img src={ImgTeste}
                            alt="mulher sorrindo" />
                        <img src={ImgTeste}
                            alt="mulher sorrindo" />
                    </div>
                </div>
            </div>
            <div className='container-professionalProfile-contact'>
                <h4>
                    Faça já sua reserva pelo site e tenha a garantia que o profissional é verificado ou seu dinheiro de volta
                </h4>
                <div className='container-professionalProfile-contact-button'>
                    <button>RESERVA</button>
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

export default ProfessionalProfile;