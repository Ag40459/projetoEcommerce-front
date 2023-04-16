import { useState } from "react";
import { useLocalStorage } from "react-use";


function useNavBarProvider() {
    const [openCloseModalMenu400, setOpenCloseModalMenu400] = useState(true);
    const [openClodesEyeConfirmed, setOpenClodesEyeConfirmed] = useState(true);
    const [openClodesEye, setOpenClodesEye] = useState(true);
    const [captchaFilled, setCaptchaFilled] = useState(false);
    const [emailProfessional, setEmailProfessional] = useState('');
    const [passwordProfessional, setPasswordProfessional] = useState('');
    const [confirmedPasswordProfessional, setConfirmedPasswordProfessional] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [token, setToken, removeToken] = useLocalStorage('token', '');

    return {
        openCloseModalMenu400,
        setOpenCloseModalMenu400,
        openClodesEyeConfirmed,
        setOpenClodesEyeConfirmed,
        captchaFilled,
        setCaptchaFilled,
        confirmedPasswordProfessional,
        setConfirmedPasswordProfessional,
        passwordProfessional,
        setPasswordProfessional,
        emailProfessional,
        setEmailProfessional,
        error,
        setError,
        success,
        setSuccess,
        token,
        setToken,
        removeToken, openClodesEye,
        setOpenClodesEye
    }
}

export default useNavBarProvider;