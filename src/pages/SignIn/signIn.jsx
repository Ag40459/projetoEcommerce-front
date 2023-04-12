import './signIn.css';
import { Link } from 'react-router-dom';
import EyeClose from "../../assets/Input_Password_Eye_Close.svg";
import EyeOpen from "../../assets/Input_Password_Eye_Open.svg";
import hcaptchaImg from "../../assets/hcaptcha.svg";
import NoticeModal from '../../components/NoticeModal/noticeModal';
import { ReCAPTCHA } from 'react-google-recaptcha'
import { useState } from 'react';
import useNavBarProvider from '../../hooks/useNavBarProvider.jsx'


function SignIn() {
    const { openClodesEye, setOpenClodesEye } = useNavBarProvider();
    const { captchaFilled, setCaptchaFilled } = useNavBarProvider();

    const handleCaptchaChange = () => {
        setCaptchaFilled(true);
    }
    console.log(captchaFilled);
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
                        id="emailInput"
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
                    <div style={{ display: 'flex', gap: '3rem' }}>
                        <img src={hcaptchaImg} alt='hcaptchaImg' className='hcaptcha-icon' />
                        <button type='button' onClick={() => window.hcaptcha.execute()}>Identificar como humano</button>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LecsHslAAAAAKxcwBpBrUe48RR6RVoSKnePdIyc"
                        onChange={handleCaptchaChange}
                        data-callback="handleCaptchaChange"
                    />
                </div>

                <span
                    style={{ width: '100%' }}
                >
                    <Link
                        className='link'
                        to={'/professional-home'}
                    >
                        FAZER LOGIN
                    </Link>
                </span>
                <button type="submit" disabled={!captchaFilled}>Sign In</button>




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
