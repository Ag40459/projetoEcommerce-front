import React, { useState, useContext } from 'react';
import './postAd.css';
import api from '../../services/api';
import { GlobalContext } from '../../contexts/GlobalContext';

const PostAd = () => {
    const { categories } = useContext(GlobalContext);
    const [phone, setPhone] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        birthdate: '',
        phone: phone,
        email: '',
        category_id: '',
        city: '',
        state: '',
        plan: '',
        zip_code: '',
        title: '',
        description: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));

        if (name === "title" && value.length < 5) {
            setTitleError("O título deve ter no mínimo 5 caracteres.");
            return;
        }

        if (name === "description" && value.length < 20) {
            setDescriptionError("A descrição deve ter no mínimo 20 caracteres.");
            return;
        }

        setTitleError("");
        setDescriptionError("");
    };

    function formatPhoneNumber(value) {
        const phoneNumber = value.replace(/\D/g, "");

        if (phoneNumber.length === 11) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
        } else if (phoneNumber.length < 11) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
        }

        return phoneNumber;
    }

    function handlePhone(event) {
        setPhone(formatPhoneNumber(event.target.value));
        const { name, value } = event.target;
        return setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const { category_id, ...dataWithoutCategoryId } = formData;

        if (formData.title.length < 5) {
            setIsLoading(false);
            alert("O título deve ter no mínimo 5 caracteres.");
            return;
        }

        if (formData.description.length < 20) {
            setIsLoading(false);
            alert("A descrição deve ter no mínimo 20 caracteres.");
            return;
        }

        try {
            const response = await api.patch(
                `/users/updateUser/${userUnifiedTable.user.id}`,
                dataWithoutCategoryId,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
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

    return (
        <div className="container-postAd">
            <form className="container-postAd-form1" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    placeholder="Data de nascimento"
                    value={formData.birthdate}
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(99) 99999-9999"
                    value={phone}
                    onChange={handlePhone}
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                />
                <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={(event) => setFormData((prevFormData) => ({ ...prevFormData, category_id: event.target.value }))}
                    className='customization-option'
                >
                    <option value="">Categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>

                <select
                    className='customization-option'
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                >
                    <option value="">Estado</option>
                    <option value="PE">PE</option>
                </select>

                <select
                    className='customization-option'
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                >
                    <option value="">Cidade</option>
                    <option value="Recife">Recife</option>
                </select>

                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Título do seu anúncio ..."
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    id="description"
                    name="description"
                    placeholder="Descrição do seu anúncio ..."
                    value={formData.description}
                    onChange={handleChange}
                />

                <button type="submit" >
                    {isLoading ? 'Carregando...' : 'Publicar anúncio'}
                </button>
            </form>
        </div>

    );
};

export default PostAd;