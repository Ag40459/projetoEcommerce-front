import React, { useState, useContext } from 'react';
import './postAd.css';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
const steps = ['Nome', 'Data de Nascimento', 'Telefone', 'E-mail', 'Categoria', 'Cidade', 'Estado', 'Plano', 'CEP', 'Título do Anúncio', 'Descrição do Anúncio'];

const PostAd = () => {
    const { categories } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        birthdate: '',
        phone: '',
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

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setFormData({
            name: '',
            birthdate: '',
            phone: '',
            email: '',
            category_id: '',
            city: '',
            state: '',
            plan: '',
            zip_code: '',
            title: '',
            description: '',
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return (
                    <>
                        <Typography variant="h6">Informe o seu nome:</Typography>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </>
                );
            case 1:
                return (
                    <>
                        <Typography variant="h6">Informe a sua data de nascimento:</Typography>
                        <input type="text" name="birthdate" value={formData.birthdate} onChange={handleChange} />
                    </>
                );
            case 2:
                return (
                    <>
                        <Typography variant="h6">Informe o seu telefone:</Typography>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </>
                );
            case 3:
                return (
                    <>
                        <Typography variant="h6">Informe o seu e-mail:</Typography>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </>
                );
            case 4:
                return (
                    <>
                        <Typography variant="h6">Selecione uma categoria:</Typography>
                        <select
                            name=""
                            className="customization-option"
                        >
                            <option
                                value="">
                            </option>
                            {categories.map(category => (
                                <option
                                    key={category.id}
                                    value={category.title}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </>
                );
            case 5:
                return (
                    <>
                        <Typography variant="h6">Informe a cidade:</Typography>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} />
                    </>
                );
            case 6:
                return (
                    <>
                        <Typography variant="h6">Selecione o estado:</Typography>
                        <select name="state" value={formData.state} onChange={handleChange}>
                            <option value="">Selecione...</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="ES">Espírito Santo</option>
                        </select>
                    </>
                );
            case 7:
                return (
                    <>
                        <Typography variant="h6">Selecione o plano:</Typography>
                        <select name="plan" value={formData.plan} onChange={handleChange}>
                            <option value="">Selecione...</option>
                            <option value="b">Básico</option>
                            <option value="p">Premium</option>
                        </select>
                    </>
                );
            case 8:
                return (
                    <>
                        <Typography variant="h6">Informe o CEP:</Typography>
                        <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} />
                    </>
                );
            case 9:
                return (
                    <>
                        <Typography variant="h6">Informe o título do seu anúncio:</Typography>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </>
                );
            case 10:
                return (
                    <>
                        <Typography variant="h6">Escreva a descrição do seu anúncio:</Typography>
                        <textarea name="description" value={formData.description} onChange={handleChange} />
                    </>
                );
            default:
                return null;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const { category_id, ...dataWithoutCategoryId } = formData;

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

    const isFormDataValid = () => {
        const requiredFields = [
            'name',
            'birthdate',
            'phone',
            'email',
            'category_id',
            'city',
            'state',
            'plan',
            'zip_code',
            'title',
            'description',
        ];

        return requiredFields.every((field) => !!formData[field]);
    };

    return (
        <div className="container-postAd">
            <form className="container-postAd-form1" onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="birthdate">Data de nascimento</label>
                <input
                    type="text"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                />

                <label htmlFor="phone">Telefone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="category_id">Categoria</label>
                <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={(event) => setFormData({ ...formData, category_id: event.target.value })}
                    className='customization-option'
                >
                    <option value="">Selecione uma categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.title}>
                            {category.title}
                        </option>
                    ))}
                </select>

                <label htmlFor="state">Estado</label>
                <select
                    className='customization-option'
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                >
                    <option value="">Selecione o estado</option>
                    <option value="PE">PE</option>
                </select>

                <label htmlFor="city">Cidade</label>
                <select
                    className='customization-option'
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                >
                    <option value="">Selecione a cidade</option>
                    <option value="Recife">Recife</option>
                </select>

                <label htmlFor="plan">Plano</label>
                <input
                    type="text"
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                />

                <label htmlFor="zip_code">CEP</label>
                <input
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleChange}
                />

                <label htmlFor="title">Título do anúncio</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <label htmlFor="description">Descrição do anúncio</label>
                <input
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <button type="submit" disabled={!isFormDataValid() || isLoading}>
                    {isLoading ? 'Carregando...' : 'Publicar anúncio'}
                </button>
            </form>
        </div>

    );
};

export default PostAd;