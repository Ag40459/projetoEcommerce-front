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
    const [listCategoryId, setListCategoryId] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [userLogedId, setUserLogedId, removeUserLogedId] = useLocalStorage('userID', '');

    useEffect(() => {
        if (token) {
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
        }
        return

    }, [userLogedId, token, listCategoryId]);

    // useEffect(() => {
    //     if (idCategory) {
    //         console.log("idCategory: " + idCategory);

    //         const fetchUnifiedData = async () => {

    //             try {
    //                 const response = await api.get(`/users/category/${idCategory}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 });
    //                 console.log(response.data.users);
    //                 setListCategoryId(response.data.users);
    //                 return console.log("listCategoryId :" + listCategoryId);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         };
    //         fetchUnifiedData();

    //     }


    // }, [idCategory]);


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
        removeUserLogedId,
        listCategoryId,
        setListCategoryId,
        idCategory,
        setIdCategory
    }
}

export default useNavBarProvider;