import { useEffect, useState } from "react";
import api from '../services/api';
import { useLocalStorage } from "react-use";

function useNavBarProvider() {
    const [openCloseModalMenu400, setOpenCloseModalMenu400] = useState(true);
    const [openClodesEyeConfirmed, setOpenClodesEyeConfirmed] = useState(true);
    const [openClodesEye, setOpenClodesEye] = useState(true);
    const [captchaFilled, setCaptchaFilled] = useState(false);
    const [emailProfessional, setEmailProfessional] = useState('');
    const [passwordProfessional, setPasswordProfessional] = useState('');
    const [confirmedPasswordProfessional, setConfirmedPasswordProfessional] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [userUnifiedTable, setUserUnifiedTable] = useState(null);
    const [userLogedId, setUserLogedId, removeUserLogedId] = useLocalStorage('userID', '');

    useEffect(() => {
        const fetchUnifiedData = async () => {
            if (!userLogedId) {
                return;
            }

            try {
                const response = await api.get(`/users/unified-tabled/${userLogedId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserUnifiedTable(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUnifiedData();
    }, [userLogedId, token]);


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
        token,
        setToken,
        removeToken, openClodesEye,
        setOpenClodesEye,
        userUnifiedTable,
        setUserUnifiedTable,
        showAlert,
        setShowAlert,
        userLogedId,
        setUserLogedId,
        removeUserLogedId
    }
}

export default useNavBarProvider;