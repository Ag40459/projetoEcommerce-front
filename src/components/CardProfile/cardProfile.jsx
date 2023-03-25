import { Link } from 'react-router-dom';
import './cardProfile.css';

function CardProfile() {
    return (
        <div className='container-cardProfile'>
            <img src="https://br-static.imgskk.com/post/7f/78/7f78876aaebb4819b37206360b99c1bc.jpg?v=84ssm3xe" alt="foto fornecido pelo usuário" />
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