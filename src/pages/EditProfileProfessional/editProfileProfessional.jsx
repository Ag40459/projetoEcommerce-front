import api from "../../services/api";
import { format, parse } from 'date-fns';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useEffect, useState, useContext } from 'react';
import EyeClose from "../../assets/Input_Password_Eye_Close.svg";
import EyeOpen from "../../assets/Input_Password_Eye_Open.svg";
import Checked from "../../assets/checked.svg";
import NotChecked from "../../assets/notChecked.svg";
import './editProfileProfessional.css';

function EditProfileProfessional() {
    const { emailProfessional, userUnifiedTable, setUserUnifiedTable, userLogedId, token, confirmedPasswordProfessional, setConfirmedPasswordProfessional, passwordProfessional, setPasswordProfessional } = useContext(GlobalContext)
    const [isLoading, setIsLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formData, setFormData] = useState();
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [states, setStates] = useState([]);
    const [phone, setPhone] = useState();
    const [selectedState, setSelectedState] = useState('');
    const [openClodesEyeConfirmed, setOpenClodesEyeConfirmed] = useState(false);
    const [openClodesEye, setOpenClodesEye,] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasMinLength, setHasMinLength] = useState(false);
    const [isFormDataReady, setIsFormDataReady] = useState(false);


    const updatePasswordValidity = (event) => {
        if (event.target.id === 'confirm-password') {
            setFormData({ ...formData, ['confirm_password']: event.target.value });
        }
        if (event.target.id === 'password') {
            setFormData({ ...formData, ['password']: event.target.value });
        }

        setHasUppercase(/[A-Z]/.test(event.target.value));
        setHasLowercase(/[a-z]/.test(event.target.value));
        setHasMinLength(event.target.value.length >= 6);

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
                );
                const data = await response.json();
                setStates(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

    }, []);


    useEffect(() => {
        async function fetchCities() {
            try {
                if (isFormDataReady == true) {

                    if (selectedState || formData?.state) {
                        const estado = states.find((e) => e.nome === selectedState || e.nome === formData.state);
                        if (estado) {

                            const response = await fetch(
                                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.sigla}/municipios`
                            );
                            const data = await response.json();
                            setCities(data);
                        }
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchCities();
    }, [selectedState, isFormDataReady]);


    useEffect(() => {
        if (userLogedId) {
            const headers = { Authorization: `Bearer ${token}` };

            api.get(`/users/unified-tabled/${userLogedId}`, { headers })
                .then(response => {
                    setUserUnifiedTable(response.data);
                    setFormData(response.data.user);
                    setIsFormDataReady(true);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [userLogedId]);

    const checkFormValidity = () => {
        if (formData.name !== "" && formData.email !== "" && formData.phone !== "" && formData.description !== "" && formData.title !== "") {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    function formatPhoneNumber(value) {
        const phoneNumber = value.replace(/\D/g, "");

        if (phoneNumber.length === 11) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
        } else {
            return phoneNumber;
        }
    }

    function formatPhoneNumberForDisplay(phone) {
        if (phone.length !== 11) {
            return phone;
        }

        const countryCode = "+55";
        const areaCode = phone.substring(0, 2);
        const firstPart = phone.substring(2, 7);
        const secondPart = phone.substring(7);

        return `${countryCode} ${areaCode} ${firstPart}${secondPart}`;
    }


    function handlePhone(event) {
        const phone = event.target.value;
        const formattedPhone = formatPhoneNumber(phone);
        setPhone(formattedPhone);
        const newPhone = formatPhoneNumberForDisplay(phone)
        console.log(newPhone);
        checkFormValidity();
        return setFormData({ ...formData, phone: newPhone });
    }


    const handleStateChange = (event) => {
        const selectedValue = event.target.options[event.target.selectedIndex].innerText;
        setSelectedState(event.target.options[event.target.selectedIndex].value);
        setFormData({ ...formData, state: selectedValue });
    };

    function handleCityChange(event) {
        const selectedValue = event.target.options[event.target.selectedIndex].value;
        setSelectedCity(selectedValue);
        setFormData({ ...formData, city: selectedValue });
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedPhoneNumber = phoneNumber && parseInt(phoneNumber.replace(/^(\+\d{2})(\d{2})(\d{5})(\d{4})$/, '$1 $2 $3-$4'));
        const formattedBirthdate = format(new Date(formData.birthdate), 'yyyy-MM-dd');
        const updatedFormData = { ...formData, phone: formattedPhoneNumber, birthdate: formattedBirthdate };

        if (updatedFormData.password && updatedFormData.confirm_password && updatedFormData.password !== updatedFormData.confirm_password) {
            alert("Erro: As senhas digitadas não são iguais. Por favor, tente novamente.");
            return;
        }

        try {
            if (!updatedFormData.email) {
                updatedFormData.email = emailProfessional;
            }

            const response = await api.patch(`/users/updateUser/${userUnifiedTable.user.id}`, updatedFormData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                setIsLoading(false);
                alert('Dados atualizados com sucesso!');
            }
        } catch (error) {
            setIsLoading(false);
            alert('Erro ao atualizar dados.');
            console.error(error);
        }
    };

    if (!userUnifiedTable) {
        return null;
    }
    console.log(formData);


    return (
        <div className='container-editProfileProfessional'>
            <div className='container-back-page'>
                <Link className='link' to='#' onClick={() => window.history.back()}>
                    Página Anterior
                </Link>
            </div>
            <h1>Atualizar Perfil</h1>

            <form
                onSubmit={handleSubmit}
            >
                <div className='container-editProfileProfessional-inputLabel'>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Nome'
                        value={formData?.name || ''}
                        onChange={handleChange}
                    />
                    <input
                        type='date'
                        id='birthdate'
                        name='birthdate'
                        placeholder='Data de Nascimento'
                        value={formData?.birthdate?.slice(0, 10) || ''}
                        onChange={handleChange}
                    />

                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        placeholder="(99) 99999-9999"
                        value={phone ? phone : ''}
                        onChange={handlePhone}
                        autoComplete="tel-national"
                    />
                    <div>
                        <select
                            className="select-plan"
                            id="states"
                            value={formData?.state || ''}
                            onChange={handleStateChange}
                        >
                            {formData?.state ? (
                                <option value={formData.state}>{formData.state}</option>
                            ) : (
                                <option value="">Selecione um estado</option>
                            )}
                            {states.map(state => (
                                <option key={state.id} value={state.sigla}>
                                    {state.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <select
                            className="select-plan"
                            id="city"
                            value={formData?.city || ''}
                            onChange={handleCityChange}
                        >
                            {formData?.city ? (
                                <option value={formData.city}>{formData.city}</option>
                            ) : (
                                <option value="">Selecione uma cidade</option>
                            )}
                            {cities.map(city => (
                                <option key={city.id} value={city.nome}>
                                    {city.nome}
                                </option>
                            ))}
                        </select>
                    </div>



                    <div
                        style={{ position: 'relative' }} >

                        <input
                            value={passwordProfessional}
                            style={{ marginBottom: '1rem' }}
                            type={!openClodesEye ? 'password' : 'text'}
                            id='password'
                            name='password'
                            placeholder='Senha'
                            onChange={(e) => {
                                setPasswordProfessional(e.target.value);
                                updatePasswordValidity(e);
                            }}
                            autoComplete="new-password"
                        />
                        <img
                            id='inputPasswordProfessional'
                            className='openCloseEye'
                            onClick={() => setOpenClodesEye(!openClodesEye)}
                            src={!openClodesEye ? EyeClose : EyeOpen}
                            alt="olho sem corte?olho com corte" />

                        <input
                            value={confirmedPasswordProfessional}
                            type={!openClodesEyeConfirmed ? 'password' : 'text'}
                            id='confirm-password'
                            name='confirmPassword'
                            placeholder='Confirme a senha'
                            onChange={(e) => {
                                setConfirmedPasswordProfessional(e.target.value);
                                updatePasswordValidity(e);
                            }}
                            autoComplete="new-password"
                        />

                        <img
                            id='inputconfirmPasswordProfessional'
                            className='openCloseEye'
                            onClick={() => setOpenClodesEyeConfirmed(!openClodesEyeConfirmed)}
                            src={!openClodesEyeConfirmed ? EyeClose : EyeOpen}
                            alt="olho sem corte?olho com corte" />

                    </div>


                    {
                        userUnifiedTable.user.plan
                        &&
                        <input
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                            placeholder='Imagem' />
                    }
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
                    <button type='submit'>
                        Salvar
                    </button>
                </div>
            </form >
            <footer>
                <a href=''>Termos e Condições</a>
                <a href=''>Politica de Privacidade</a>
                <a href=''>Fale Conosco</a>
            </footer>
        </div >

    )
}

export default EditProfileProfessional;