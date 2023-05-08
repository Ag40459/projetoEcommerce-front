import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { GlobalContext } from '../contexts/GlobalContext';
import api from '../services/api';


export const GlobalContextProvider = ({ children }) => {
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [idCategory, setIdCategory, removeIdCategory] = useLocalStorage('idCategory', '');
    const [idUserCategory, setIdUserCategory, removeIdUserCategory] = useLocalStorage('idUserCategory', '');
    const [userLogedId, setUserLogedId, removeUserLogedId] = useLocalStorage('userID', '');
    const [theme, setTheme] = useState("Claro");
    const [listCategoryId, setListCategoryId] = useState("");
    const [listResultSearch, setListResultSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [emailProfessional, setEmailProfessional] = useState("");
    const [passwordProfessional, setPasswordProfessional] = useState("");
    const [confirmedPasswordProfessional, setConfirmedPasswordProfessional] = useState("");
    const [userUnifiedTable, setUserUnifiedTable] = useState(null);

    useEffect(() => {
        removeIdCategory();

        api.get('/categories')
            .then(response => {
                setCategories(response.data);

            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <GlobalContext.Provider value={{

            theme,
            setTheme,
            setIdCategory,
            removeIdCategory,
            idCategory,
            listCategoryId,
            setListCategoryId,
            listResultSearch,
            setListResultSearch,
            categories,
            setCategories,
            emailProfessional,
            setEmailProfessional,
            passwordProfessional,
            setPasswordProfessional,
            confirmedPasswordProfessional,
            setConfirmedPasswordProfessional,
            token,
            setToken,
            removeToken,
            userLogedId,
            setUserLogedId,
            removeUserLogedId,
            userUnifiedTable,
            setUserUnifiedTable,
            idUserCategory,
            setIdUserCategory,
            removeIdUserCategory

        }}>
            {children}
        </GlobalContext.Provider>
    );
};
