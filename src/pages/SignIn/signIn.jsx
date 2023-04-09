import './signIn.css';
import { Link } from 'react-router-dom';
import EyeClose from "../../assets/Input_Password_Eye_Close.svg";
import EyeOpen from "../../assets/Input_Password_Eye_Open.svg";
import hcaptcha from "../../assets/hcaptcha.svg";
import NoticeModal from '../../components/NoticeModal/noticeModal';
import { useState } from 'react';

function SignIn() {
    const [openClodesEye, setOpenClodesEye] = useState(true);
    return (
        <div className='container-sign-in'>
            <div className='container-categories-meuOptions'>
                <Link
                    className='link'
                    to='/'>
                    Voltar para Home
                </Link>
            </div>
            {/* <NoticeModal /> */}
            <div className='container-sign-in-welcome'>
                <h2>Faça seu Login</h2>
            </div>
            <form action="">
                <div className='container-sign-in-input-login'>
                    <input
                        type="email"
                        id=''
                        placeholder='E-mail' />
                    <input
                        type={openClodesEye ? 'password' : 'text'}
                        placeholder='Senha' />
                    <img
                        className='openCloseEye'
                        onClick={() => setOpenClodesEye(!openClodesEye)}
                        src={openClodesEye ? EyeClose : EyeOpen}
                        alt="olho sem corte/olho com corte" />
                </div>

                <div className='container-sign-in-input-login-hCaptcha'>
                    <div
                        style={{ display: 'flex', gap: '3rem' }}>

                        <input type="checkbox" name="" id="checkboxHCaptcha" />
                        <p id=''>Sou humano</p>
                    </div>

                    <img
                        style={{ width: '3rem' }}
                        src={hcaptcha} alt="hcaptcha" />
                </div>
                <button
                    style={{ width: '100%' }}
                ><a
                    className='link'
                    href='/professional-home'>
                        FAZER LOGIN
                    </a>
                </button>

            </form>

            <div className='container-sign-in-relemberPassword'>
                <Link
                    to={'/forgot-password'} >Esqueceu sua senha?</Link>
                <p>Ainda não tem uma conta? <Link to={'/sign-up'}>Cadastre-se</Link></p>

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


export default SignIn;