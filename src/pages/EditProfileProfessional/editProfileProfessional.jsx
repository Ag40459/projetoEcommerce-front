import { Link } from 'react-router-dom';
import './editProfileProfessional.css';

function EditProfileProfessional() {
    return (
        <div className='container-editProfileProfessional'>
            <div className='container-back-page'>
                <Link className='link' to='/professional-home'>
                    Voltar
                </Link>
            </div>
            <h1>editProfileProfessional</h1>
            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>
            </footer>
        </div>
    )
}

export default EditProfileProfessional;