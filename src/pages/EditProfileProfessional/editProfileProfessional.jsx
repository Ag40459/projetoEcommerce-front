import api from "../../services/api";
import { Link } from 'react-router-dom';
import useNavBarProvider from '../../hooks/useNavBarProvider';
import { useEffect, useState } from 'react';
import './editProfileProfessional.css';

function EditProfileProfessional() {
    const { userUnifiedTable, token } = useNavBarProvider();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(userUnifiedTable);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');

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
        if (selectedState) {

            async function fetchData() {
                try {
                    const response = await fetch(
                        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
                    );
                    const data = await response.json();
                    setCities(data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }

    }, [selectedState]);


    const handleStateChange = (event) => {
        const selectedValue = event.target.options[event.target.selectedIndex].innerText;
        setSelectedState(event.target.options[event.target.selectedIndex].value);
        setFormData({ ...formData, state: selectedValue });
    };

    function handleCityChange(event) {
        const selectedValue = event.target.options[event.target.selectedIndex].value;
        setSelectedCity(selectedValue);
        setFormData({ ...formData, city: selectedValue });
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handlePhoneChange = (event) => {
        let phone = event.target.value;
        phone = phone.replace(/\D/g, ''); // remove caracteres não numéricos
        phone = phone.replace(/^(\d{2})(\d)/g, '+$1 $2'); // formatação padrão para DDD +55
        phone = phone.replace(/(\d{5})(\d)/, '$1 $2'); // separação do número em blocos
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    console.log(formData.confirmPassword
    );

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if ((formData.password) != (formData.confirmPassword)) {
            alert("Erro: As senhas digitadas não são iguais. Por favor, tente novamente.")
            return
        }

        try {
            const response = await api.patch(`/users/updateUser/${userUnifiedTable.user.id}`, formData, {
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
                        defaultValue={userUnifiedTable.user.name}
                        onChange={handleChange}
                    />
                    <input
                        type='date'
                        id='birthdate'
                        name='birthdate'
                        placeholder='Data de Nascimento'
                        defaultValue={userUnifiedTable.user.birthdate}
                        onChange={handleChange}
                    />

                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        placeholder='Telefone'
                        defaultValue={userUnifiedTable.user.phone}
                        pattern='[0-9]*'
                        maxLength='15'
                        onInput={handlePhoneChange}
                    />
                    <div>
                        <select
                            className="select-plan"
                            id="states"
                            value={selectedState}
                            onChange={handleStateChange}>
                            <option value="">Selecione um estado</option>
                            {states.map(state => (
                                <option
                                    key={state.id}
                                    value={state.sigla}
                                >
                                    {state.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div
                    >
                        <select
                            className="select-plan"
                            id="city"
                            value={selectedCity}
                            onChange={handleCityChange}
                        >
                            <option
                                value="">
                                Selecione uma cidade
                            </option>
                            {cities.map(city => (
                                <option
                                    key={city.id}
                                    value={city.nome}>
                                    {city.nome}
                                </option>
                            )
                            )
                            }
                        </select>

                    </div>

                    <input
                        type='text'
                        id='street'
                        name='street'
                        placeholder='Rua'
                        defaultValue={userUnifiedTable.user.street}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        id='house-number'
                        name='houseNumber'
                        placeholder='Número'
                        defaultValue={userUnifiedTable.user.houseNumber}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        id='neighborhood'
                        name='neighborhood'
                        placeholder='Bairro'
                        defaultValue={userUnifiedTable.user.neighborhood}
                        onChange={handleChange}
                    />

                    {/* <select
                    className='select-plan'
                    id='category'
                    name='category'
                    placeholder='Categoria'>
                    <option value=''>
                        Selecione uma categoria
                    </option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select> */}

                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Senha'
                        defaultValue={userUnifiedTable.user.password}
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        id='confirm-password'
                        name='confirmPassword'
                        placeholder='Confirme a senha'
                        defaultValue={userUnifiedTable.user.confirm_password}
                        onChange={handleChange}
                    />

                    <input
                        type='file'
                        id='image'
                        name='image'
                        accept='image/*'
                        placeholder='Imagem' />

                    <button type='submit'>
                        Salvar
                    </button>
                </div>
            </form>
            <footer>
                <a href=''>Termos e Condições</a>
                <a href=''>Politica de Privacidade</a>
                <a href=''>Fale Conosco</a>
                <a id='end' href=''>Promover seus Anúncios</a>
            </footer>
        </div>

    )
}

export default EditProfileProfessional;