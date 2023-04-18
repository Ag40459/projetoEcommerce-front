import api from "../../services/api";
import { Link, useNavigate } from 'react-router-dom';
import EyeClose from "../../assets/Input_Password_Eye_Close.svg";
import Checked from "../../assets/checked.svg";
import './signUp.css';
import EyeOpen from "../../assets/Input_Password_Eye_Open.svg";
import NotChecked from "../../assets/notChecked.svg";
import useNavBarProvider from '../../hooks/useNavBarProvider';
import hcaptcha from "../../assets/hcaptcha.svg";
import { useState } from "react";


function SignUp() {
    const { openClodesEyeConfirmed, setOpenClodesEyeConfirmed, openClodesEye, setOpenClodesEye, emailProfessional, setEmailProfessional, passwordProfessional, setPasswordProfessional, confirmedPasswordProfessional, setConfirmedPasswordProfessional, setShowAlert, showAlert } = useNavBarProvider();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const checkPassword = {
        uppercase: false,
        lowercase: false,
        qtCharacter: false
    };
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!emailProfessional || !passwordProfessional || !confirmedPasswordProfessional) {
            setShowAlert('Por favor, preencha todos os campos obrigatórios.');
            setSuccess(null);
            return alert('Por favor, preencha todos os campos obrigatórios.')
        }

        if (passwordProfessional !== confirmedPasswordProfessional) {
            setError('As senhas não coincidem.');
            setSuccess(null);
            return alert(error);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

        if (!emailRegex.test(emailProfessional)) {
            setError('Por favor, informe um endereço de email válido.');
            setSuccess(null);
            return alert(error);
        }
        try {
            console.log(
                emailProfessional,
                passwordProfessional,
                confirmedPasswordProfessional
            );
            const response = await api.post('/users/sign-up', {
                email: emailProfessional,
                password: passwordProfessional,
                confirm_password: confirmedPasswordProfessional
            });

            if (response.status === 200) {
                setSuccess('Cadastro realizado com sucesso!');
                setError(null);
            } else {
                setError('Ocorreu um erro ao realizar o cadastro.1');
                setSuccess(null);
            }

            navigate("/sign-in");

        } catch (error) {
            setError('Ocorreu um erro ao realizar o cadastro.2');
            setSuccess(null);
        }
    };

    return (
        <div className='container-sign-up'>
            <div className='container-back-page'>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'>

                    Voltar para Home
                </Link>
            </div>
            <div className='container-sign-up-welcome'>
                <h2>Cadastre-se</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='container-sign-up-input-login'>
                    <input
                        type="text"
                        onChange={(e) => setEmailProfessional(e.target.value)}
                        value={emailProfessional}
                        placeholder='E-mail' />
                    <input
                        type={openClodesEye ? 'password' : 'text'}
                        onChange={(e) => setPasswordProfessional(e.target.value)}
                        value={passwordProfessional}
                        placeholder='Senha'
                    />
                    <img
                        id='inputPasswordProfessional'
                        className='openCloseEye'
                        onClick={() => setOpenClodesEye(!openClodesEye)}
                        src={openClodesEye ? EyeClose : EyeOpen}
                        alt="olho sem corte?olho com corte" />

                    <input
                        value={confirmedPasswordProfessional}
                        onChange={(e) => setConfirmedPasswordProfessional(e.target.value)}
                        type={openClodesEyeConfirmed ? 'password' : 'text'}
                        placeholder='Confirmar Senha' />
                    <img
                        id='inputConfirmedPasswordProfessional'
                        className='openCloseEye'
                        onClick={() => setOpenClodesEyeConfirmed(!openClodesEyeConfirmed)}
                        src={openClodesEyeConfirmed ? EyeClose : EyeOpen}
                        alt="olho sem corte?olho com corte" />
                </div>

                <div className='container-sign-up-rules'>
                    <h4>
                        Sua senha deve conter:
                    </h4>
                    <div className='container-sign-up-rules-password'>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={checkPassword.uppercase ? Checked : NotChecked}
                                alt="checked/ Notchecked" /> <p>Uma letra maiúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={checkPassword.uppercase ? Checked : NotChecked}
                                alt="checked/ Notchecked" /> <p>Uma letra minúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={checkPassword.uppercase ? Checked : NotChecked}
                                alt="checked/ Notchecked" /> <p>Mínimo de 6 caracteres</p>
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
                <button
                    type="submit"
                    style={{ width: '100%' }} >
                    CADASTRAR
                </button>

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