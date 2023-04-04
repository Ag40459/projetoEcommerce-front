import './signIn.css';
import { Link } from 'react-router-dom';
import NoticeModal from '../../components/NoticeModal/noticeModal';
import { useState } from 'react';

function SignIn() {
    const [openClodesEye, setOpenClodesEye] = useState(true);
    return (
        <div className='container-sign-in'>
            <div className='container-categories-meuOptions'>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'>

                    Voltar para Home
                </Link>
            </div>
            {/* <NoticeModal /> */}
            <div className='container-sign-in-welcome'>
                <h4>Bem Vindo,</h4>
                <h2>Faça seu Login</h2>
            </div>
            <form action="">
                <div className='container-sign-in-input-login'>
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

                <div className='container-sign-in-input-login-hCaptcha'>
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

            <div className='container-sign-in-relemberPassword'>
                <Link to={'/'} >Esqueceu sua senha?</Link>
                <p>Ainda não tem uma conta? <Link to={'/'}>Cadastre-se</Link></p>

            </div>
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


export default SignIn;