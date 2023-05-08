import api from "../../services/api";
import { Link, useNavigate } from 'react-router-dom';
import EyeClose from "../../assets/Input_Password_Eye_Close.svg";
import EyeOpen from "../../assets/Input_Password_Eye_Open.svg";
import Checked from "../../assets/checked.svg";
import NotChecked from "../../assets/notChecked.svg";
import './signUp.css';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';


function SignUp() {
    const { emailProfessional, setEmailProfessional, passwordProfessional, setPasswordProfessional, confirmedPasswordProfessional, setConfirmedPasswordProfessional } = useContext(GlobalContext)
    const [openClodesEyeConfirmed, setOpenClodesEyeConfirmed] = useState();
    const [openClodesEye, setOpenClodesEye,] = useState();
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasMinLength, setHasMinLength] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isHuman, setIsHuman] = useState(false);
    const siteKey = "6LcO7OwlAAAAAEgEFH91DfTeM1yxy5HyWckBFyz-";
    const secretKey = "6LcO7OwlAAAAAKMi7lzAm19fR5yEziaTYaQyEbny";

    const navigate = useNavigate();

    function handleCheckboxChange() {
        setIsChecked((prevState) => !prevState);
    }
    function handleVerifyReCAPTCHA() {
        setIsHuman(true);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!emailProfessional || !passwordProfessional || !confirmedPasswordProfessional) {
            return alert('Por favor, preencha todos os campos obrigatórios.')
        }

        if (passwordProfessional !== confirmedPasswordProfessional) {
            return alert('As senhas não coincidem.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

        if (!emailRegex.test(emailProfessional)) {
            return alert('Por favor, informe um endereço de email válido.');
        }
        try {
            const response = await api.post('/users/sign-up', {
                email: emailProfessional,
                password: passwordProfessional,
                confirm_password: confirmedPasswordProfessional
            });

            if (response.status === 200) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Ocorreu um erro ao realizar o cadastro.1');
            }

            navigate("/sign-in");

        } catch (error) {
            alert('Ocorreu um erro ao realizar o cadastro.2');
        }
    };

    const updatePasswordValidity = (password) => {
        setHasUppercase(/[A-Z]/.test(password));
        setHasLowercase(/[a-z]/.test(password));
        setHasMinLength(password.length >= 6);
    }

    useEffect(() => {
        // carrega a biblioteca do reCAPTCHA Enterprise
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/enterprise.js?onload=onLoadCallback&render=" + siteKey;
        script.async = true;
        document.head.appendChild(script);


        window.onLoadCallback = () => {
            grecaptcha.enterprise.ready(() => {
                grecaptcha.enterprise.execute(siteKey, { action: "login" })
                    .then((token) => {
                        console.log("Token do reCAPTCHA: ", token);
                    })
                    .catch((error) => {
                        console.error("Erro ao obter o token do reCAPTCHA: ", error);
                    });
            });
        };
    }, []);

    return (
        <div className='container-sign-up'>
            <div className='container-back-page'>
                <Link className='link' to='#' onClick={() => window.history.back()}>
                    Página Anterior
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
                        onChange={(e) => {
                            setPasswordProfessional(e.target.value);
                            updatePasswordValidity(e.target.value);
                        }}
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
                        onChange={(e) => {
                            setConfirmedPasswordProfessional(e.target.value);
                            updatePasswordValidity(e.target.value);
                        }}
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
                                src={hasUppercase ? Checked : NotChecked}
                                alt="checked/ Notchecked" /> <p>Uma letra maiúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={hasLowercase ? Checked : NotChecked}
                                alt="checked/ Notchecked" /> <p>Uma letra minúscula</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={hasMinLength ? Checked : NotChecked}
                                alt="checked/ Notchecked" /> <p>Mínimo de 6 caracteres</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <img
                                src={
                                    confirmedPasswordProfessional === passwordProfessional && passwordProfessional !== ''
                                        ? Checked
                                        : NotChecked
                                }
                                alt="checked/ Notchecked"
                            />
                            <p>
                                {confirmedPasswordProfessional === passwordProfessional && passwordProfessional !== ''
                                    ? 'As senhas coincidem'
                                    : 'As senhas não coincidem'}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="container-sign-up-terms-and-conditions">

                    <label
                        style={{ display: 'flex', gap: '2rem' }}
                    >
                        <input
                            type="checkbox"
                            name="termsConditions"
                            id="checkboxTermsConditions"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <p>
                            Li os{" "}
                            <Link to={"/"}>
                                Termos e Condições
                            </Link>{" "}
                            de uso e a{" "}
                            <a href={"/"}>Política de Privacidade</a> e autorizo o
                            processamento dos meus dados pessoais para o fornecimento deste
                            serviço na web.
                        </p>
                    </label>
                </div>

                <div
                    id="myRecaptcha"
                >
                    <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={handleVerifyReCAPTCHA}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        height: "5rem",
                        backgroundColor: isChecked && isHuman ? "#04C45C" : "#CCCCCC",
                        borderRadius: "8px",
                        cursor: isChecked && isHuman ? "pointer" : "not-allowed",
                    }}
                    disabled={!isChecked || !isHuman}
                >
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