import { Link } from 'react-router-dom';
import './cardProfile.css';
import Checked from "../../assets/checked.svg";
import NotChecked from "../../assets/notChecked.svg";

const checked = true;
function CardProfile() {
    return (
        <div className='container-cardProfile'>
            {checked
                ?
                <div className='imgChecked'>
                    <img src={Checked} alt="checked incone" />
                </div>
                :
                <div id='imgNotChecked'>
                    <img src={NotChecked} alt="NotChecked incone" />
                </div>
            }

            <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/17450174-o-logotipo-dos-bonecos-de-neve-para-uma-empresa-de-sorvetes-e-um-design-divertido-e-caprichoso-que-captura-a-essencia-do-inverno-e-a-alegria-de-saborear-uma-deliciosa-bola-de-sorvete-gratis-vetor.jpg" alt="foto fornecido pelo usuário" />
            <Link to='/page-card'>
                <div className='container-cardProfile-description'>
                    <h1>Título feito pelo usuário</h1>
                    <h3 id='teste' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore minus natus ab quia consequuntur inventore! Facilis aut eveniet ex minima blanditiis quos repellat, ea excepturi perspiciatis consequatur esse fuga.</h3>
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