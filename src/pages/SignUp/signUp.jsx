import './signUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const teste = '';
function SignUp() {
    const [openClodesEye, setOpenClodesEye] = useState(true);

    return (
        <div className='container-signup'>
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
                    <input
                        id='openClodesEye'
                        onClick={() => setOpenClodesEye(!openClodesEye)}
                        type='checkbox' />
                </div>

                <div className='container-sign-up-rules'>
                    <h4>
                        Sua senha deve conter:
                    </h4>
                    <div className='container-sign-up-rules-password'>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={teste ? 'src/assets/checked.svg' : 'src/assets/notChecked.svg'}
                                alt="" /> <p>Uma letra maiúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={teste ? 'src/assets/checked.svg' : 'src/assets/notChecked.svg'}
                                alt="" /> <p>Uma letra minúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={teste ? 'src/assets/checked.svg' : 'src/assets/notChecked.svg'}
                                alt="" /> <p>Mínimo de 8 caracteres</p>
                        </div>

                    </div>
                </div>
                <div className='container-signup-terms-and-conditions'>
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
                        src="https://cdn.worldvectorlogo.com/logos/hcaptcha-2.svg" alt="" />
                </div>
                <button >FAZER LOGIN</button>

            </form>
            <footer>
                <div className='container-initial-baseBoard'>
                    <a href="">Termos e Condições</a>
                    <a href="">Politica de Privacidade</a>
                    <a href="">Fale Conosco</a>
                    <a id='end' href="">Promover seus Anúncios</a>

                </div>
            </footer>
        </div>
    )
}

export default SignUp;