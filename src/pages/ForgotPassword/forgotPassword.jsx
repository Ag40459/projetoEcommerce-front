import { Link } from 'react-router-dom';
import './forgotPassword.css';

function ForgotPassword() {
    return (
        <div className='container-forgot-password'>
            <div className='container-categories-meuOptions'>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'>

                    Voltar para Home
                </Link>
            </div>
            <div className='container-forgot-password-information'>

                <h1>Esqueceu sua senha?</h1>
                <p>Não se preocupe. Isso pode acontecer com qualquer pessoa :)</p>
                <p>Insira seu endereço de e-mail para que enviemos a você um link de redefinição da sua senha.</p>
            </div>

            <form action="">
                <div className='container-forgot-password-login'>
                    <input
                        type="text"
                        id=''
                        placeholder='E-mail' />
                </div>
                <div className='container-forgot-password-hCaptcha'>
                    <div
                        style={{ display: 'flex', gap: '3rem' }}>

                        <input type="checkbox" name="" id="checkboxHCaptcha" />
                        <p id=''>Sou humano</p>
                    </div>

                    <img
                        style={{ width: '3rem' }}
                        src="https://cdn.worldvectorlogo.com/logos/hcaptcha-2.svg" alt="" />
                </div>
                <button >REDEFINIR SENHA</button>
            </form>
            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>

            </footer>
        </div>
    )
}

export default ForgotPassword;