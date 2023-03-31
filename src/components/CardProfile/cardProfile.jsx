import { Link } from 'react-router-dom';
import './cardProfile.css';

function CardProfile() {
    return (
        <div className='container-cardProfile'>
            <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/17450174-o-logotipo-dos-bonecos-de-neve-para-uma-empresa-de-sorvetes-e-um-design-divertido-e-caprichoso-que-captura-a-essencia-do-inverno-e-a-alegria-de-saborear-uma-deliciosa-bola-de-sorvete-gratis-vetor.jpg" alt="foto fornecido pelo usuário" />
            <Link to='/page-card'>
                <div className='container-cardProfile-description'>
                    <h1>Título feito pelo usuário</h1>
                    <h3>Descrição feito pelo usuário</h3>
                    <div className='container-cardProfile-description-detail'>
                        <p>Idade</p>
                        <p>Categoria</p>
                        <p id='container-cardProfile-description-detail-p'>Cidade</p>
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default CardProfile;