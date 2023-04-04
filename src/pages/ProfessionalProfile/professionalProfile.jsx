import { Link } from 'react-router-dom';
import './professionalProfile.css';

function ProfessionalProfile() {
    return (
        <div className='container-professionalProfile'>
            <Link to='/categories'>Voltar</Link>

            <div>
                <h5>Data</h5>
                <div className='container-professionalProfile-description'>
                    <div className='container-professionalProfile-description-detail'>
                        <p>Idade</p>
                        <p>Categoria</p>
                        <p id='container-professionalProfile-description-detail-p'>Cidade</p>
                    </div>
                    <h1>Título feito pelo usuário</h1>
                    <h3>Descrição feito pelo usuário</h3>

                    <div className='container-professionalProfile-image'>
                        <img src="https://a-static.mlcdn.com.br/800x560/boneca-mulher-maravilha-com-laco-wonder-woman/abrakadabra/549/04340fcc9f8e0a666dc06fff0e8b2cd7.jpeg" alt="boneco da mulher maravilha" />
                        <img src="https://a-static.mlcdn.com.br/800x560/boneca-mulher-maravilha-com-laco-wonder-woman/abrakadabra/549/04340fcc9f8e0a666dc06fff0e8b2cd7.jpeg" alt="boneco da mulher maravilha" />
                        <img src="https://a-static.mlcdn.com.br/800x560/boneca-mulher-maravilha-com-laco-wonder-woman/abrakadabra/549/04340fcc9f8e0a666dc06fff0e8b2cd7.jpeg" alt="boneco da mulher maravilha" />
                        <img src="https://a-static.mlcdn.com.br/800x560/boneca-mulher-maravilha-com-laco-wonder-woman/abrakadabra/549/04340fcc9f8e0a666dc06fff0e8b2cd7.jpeg" alt="boneco da mulher maravilha" />
                    </div>
                </div>
            </div>
            <h2>Entre em contato comigo</h2>
            <div className='container-professionalProfile-button'>
                <button>TELEFONE</button>
                <button>WHATSAPP</button>

            </div>
        </div>
    )
}

export default ProfessionalProfile;