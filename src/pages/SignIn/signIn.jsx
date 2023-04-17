import './signIn.css';
import { Link, useNavigate } from 'react-router-dom';
import EyeClose from "../../assets/Input_Password_Eye_Close.svg";
import EyeOpen from "../../assets/Input_Password_Eye_Open.svg";
import NoticeModal from '../../components/NoticeModal/noticeModal';
import { useState } from 'react';
import useNavBarProvider from '../../hooks/useNavBarProvider.jsx';
import MessageAlert from '../../components/MessageAlert/messageAlert';
import axios from 'axios';

function SignIn() {
    const navigate = useNavigate();
    const [openClodesEye, setOpenClodesEye] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const { token, setToken, removeToken, setUserLogged } = useNavBarProvider();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 5000);
            return;
        }
        try {
            const response = await axios.post("/sign-in", {
                email, password
            });
            const { token: responseToken } = response.data;

            setToken(responseToken);
            navigate('/professional-home');
            setUserLogged(response.data);
            setShowSuccessAlert(true); // definir como true após um submit bem sucedido
            setTimeout(() => setShowSuccessAlert(false), 5000); // definir como false após um intervalo de tempo

        } catch (error) {
            console.log(error);
            // Tratar erro de autenticação
        }
    }

    return (
        <div className='container-sign-in'>
            <div className='container-back-page'>
                <Link className='link' to='/'>
                    Voltar para Home
                </Link>
            </div>
            <div className='container-sign-in-welcome'>
                <h2>Faça seu Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='container-sign-in-input-login'>
                    <input
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='E-mail'
                    />
                    <div className='password-input-container'>
                        <input
                            type={openClodesEye ? 'password' : 'text'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder='Senha'
                        />
                        <img
                            className='openCloseEye'
                            onClick={() => setOpenClodesEye(!openClodesEye)}
                            src={openClodesEye ? EyeClose : EyeOpen}
                            alt="olho sem corte/olho com corte"
                        />
                    </div>
                </div>

                <div className='container-sign-in-submit'>
                    <button type="submit">Entrar</button>
                </div>
            </form>

            <div className='container-sign-in-relemberPassword'>
                <Link to={'/forgot-password'} >Esqueceu sua senha?</Link>
                <p>Ainda não tem uma conta? <Link to={'/sign-up'}>Cadastre-se</Link></p>
            </div>

            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>
            </footer>
            {showAlert &&
                <div
                    className='container-sign-in-messageAlert'>
                    <MessageAlert message="Preencha todos os campos." />
                </div>
            }
        </div>
    )
}

export default SignIn;