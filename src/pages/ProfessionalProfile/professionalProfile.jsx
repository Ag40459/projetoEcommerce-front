import { Link } from 'react-router-dom';
import './professionalProfile.css';

function ProfessionalProfile() {
    return (
        <div className='container-professionalProfile'>
            <Link to='/categories'>Voltar</Link>

            <div>
                <div className='container-professionalProfile-description'>
                    <div
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div
                            style={{ display: 'flex', gap: '2rem' }}>

                            <p>Data</p>
                            <p>Plano</p>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <p>Idade: { }</p>
                            <p>Categoria: { }</p>
                            <p>Cidade: { }</p>
                        </div>
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