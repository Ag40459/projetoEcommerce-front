import { useEffect, useState } from "react";
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
    const [unifiedTable, setUnifiedTable] = useState(null);
    const [userLogged, setUserLogged] = useState(null);

    useEffect(() => {
        const fetchUnifiedData = async (res, req) => {
            try {
                const response = await api.get(`/users/${id}/unified`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUnifiedTable(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUnifiedData();
    }, [id, token]);




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
        setOpenClodesEye,
        unifiedTable,
        setUnifiedTable,
        userLogged,
        setUserLogged
    }
}

export default useNavBarProvider;