import './signUp.css';
import { Link } from 'react-router-dom';
import EyeClose from "../../assets/Input_Password_Eye_Close.svg";
import EyeOpen from "../../assets/Input_Password_Eye_Open.svg";
import Checked from "../../assets/checked.svg";
import NotChecked from "../../assets/notChecked.svg";
import hcaptcha from "../../assets/hcaptcha.svg";
import { useState } from 'react';


function SignUp() {
    const [openClodesEye, setOpenClodesEye] = useState(true);
    const checkPassword = {
        uppercase: false,
        lowercase: false,
        qtCharacter: false
    };
    return (
        <div className='container-sign-up'>
            <div className='container-categories-meuOptions'>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'>

                    Voltar para Home
                </Link>
            </div>
            <div className='container-sign-up-welcome'>
                <h2>Cadastre-se</h2>
            </div>
            <form action="">
                <div className='container-sign-up-input-login'>
                    <input
                        type="text"
                        id=''
                        placeholder='E-mail' />
                    <input
                        type={openClodesEye ? 'password' : 'text'}
                        placeholder='Senha' />
                    <img
                        className='openCloseEye'
                        onClick={() => setOpenClodesEye(!openClodesEye)}
                        src={openClodesEye ? { EyeClose } : { EyeOpen }}
                        alt="olho sem corte?olho com corte" />
                </div>

                <div className='container-sign-up-rules'>
                    <h4>
                        Sua senha deve conter:
                    </h4>
                    <div className='container-sign-up-rules-password'>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={checkPassword.uppercase ? { Checked } : { NotChecked }}
                                alt="checked/ Notchecked" /> <p>Uma letra maiúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={checkPassword.uppercase ? { Checked } : { NotChecked }}
                                alt="checked/ Notchecked" /> <p>Uma letra minúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={checkPassword.uppercase ? { Checked } : { NotChecked }}
                                alt="checked/ Notchecked" /> <p>Mínimo de 8 caracteres</p>
                        </div>

                    </div>
                </div>
                <div className='container-sign-up-terms-and-conditions'>
                    <h4>Termos, Condições e Política de Privacidade</h4>
                    <p>Li os <Link to={'/'}> Termos e Condições
                    </Link> de uso e a <a href='/'> Política de Privacidade</a> e autorizo o processamento dos meus dados pessoais para o fornecimento deste serviço na web.</p>
                </div>

                <div className='container-sign-up-input-login-hCaptcha'>
                    <div
                        style={{ display: 'flex', gap: '3rem' }}>

                        <input type="checkbox" name="" id="checkboxHCaptcha" />
                        <p id=''>Sou humano</p>
                    </div>

                    <img
                        style={{ width: '3rem' }}
                        src={hcaptcha} alt="hcaptcha" />
                </div>
                <button >FAZER LOGIN</button>

            </form>
            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                {/* <Link to={'/'}></Link> */}
                <a id='end' href="">Promover seus Anúncios</a>
            </footer>
        </div>
    )
}

export default SignUp;