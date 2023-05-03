import React, { useState, useContext } from 'react';
import './postAd.css';
import api from '../../services/api';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Button } from '@mui/base';

const PostAd = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [plano, setPlano] = useState("");
    const [imagens, setImagens] = useState([]);
    const [formaDePagamento, setFormaDePagamento] = useState("");
    const { categories } = useContext(GlobalContext);
    const [phone, setPhone] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
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

    const checkFormValidity = () => {
        if (formData.name !== "" && formData.email !== "" && formData.phone !== "" && formData.description !== "") {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };
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
        checkFormValidity();
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
        const { name, value } = event.target;
        setPhone(formatPhoneNumber(event.target.value));
        checkFormValidity();
        return setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setPlano("");
        setImagens([]);
        setFormaDePagamento("");
    };

    const handlePlanoChange = (event) => {
        setPlano(event.target.value);
    };

    const handleImagensChange = (event) => {
        setImagens(event.target.files);
    };

    const handleFormaDePagamentoChange = (event) => {
        setFormaDePagamento(event.target.value);
    };

    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return step === 2 && imagens.length === 0;
    };

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
        <div>
            <Stepper
                activeStep={activeStep}
            >
                <Step
                >
                    <StepLabel>
                        Formulário
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Plano
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Imagens
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Pagamento
                    </StepLabel>
                </Step>
            </Stepper>
            {activeStep === 0 && (
                <div>
                    <h2>Formulário</h2>
                    <form
                        className="container-postAd-form1"
                        onSubmit={handleSubmit}>
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
                            <option disabled selected value="">Categoria</option>
                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}>
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
                            placeholder="Descrição do seu anúncio. A descrição deve ter no mínimo 20 caracteres."
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <Button variant="contained" color="primary" onClick={handleNext} disabled={buttonDisabled}>
                            Próximo
                        </Button>
                    </form>
                </div>
            )}
            {activeStep === 1 && (
                <div>
                    <h2>Escolha o plano</h2>
                    <form>
                        <label>
                            Plano:
                            <select
                                className='customization-option'
                                value={plano}
                                onChange={handlePlanoChange}
                            >
                                <option disabled selected value="">Selecione seu Plano</option>
                                <option value="plano1">Free</option>
                                <option value="plano2">Premium</option>
                                <option value="plano3">Platina</option>
                            </select>
                        </label>
                        <br />
                        <Button onClick={handleBack}>Voltar</Button>
                        <Button variant="contained" color="primary" onClick={handleNext} disabled={buttonDisabled}>
                            Próximo
                        </Button>
                    </form>
                </div>
            )}
            {activeStep === 2 && (
                <div>
                    <h2>Envie imagens</h2>
                    <form>
                        <label>
                            Selecione as imagens:
                            <input
                                type="file"
                                name="imagens"
                                multiple onChange={handleImagensChange} />
                        </label>
                        <br />
                        {plano === "plano1" && <p>Pode enviar até 1 imagens.</p>}
                        {plano === "plano2" && <p>Pode enviar até 5 imagens.</p>}
                        {plano === "plano3" && <p>Pode enviar até 10 imagens.</p>}
                        <Button onClick={handleBack}>Voltar</Button>
                        <Button variant="contained" color="primary" onClick={handleNext} disabled={isStepSkipped(activeStep)}>
                            Próximo
                        </Button>
                    </form>
                </div>
            )}
            {activeStep === 3 && (
                <div>
                    <h2>Pagamento</h2>
                    <form>
                        <select
                            className='customization-option'
                            value={formaDePagamento}
                            onChange={handleFormaDePagamentoChange}>
                            <option disabled selected value="">Forma de Pagamento:</option>

                            <option value="cartao">
                                Pix
                            </option>
                            <option value="boleto">
                                Boleto
                            </option>
                        </select>
                        <br />
                        <Button onClick={handleBack}>Voltar</Button>
                        <Button variant="contained" color="primary" onClick={handleReset}>
                            Enviar
                        </Button>
                    </form>
                </div>

            )}
        </div>)
}

export default PostAd;