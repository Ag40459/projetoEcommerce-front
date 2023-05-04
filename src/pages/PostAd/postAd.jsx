import React, { useState, useContext } from 'react';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import './postAd.css';
import api from '../../services/api';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Step, Stepper } from '@mui/material';
import { Button } from '@mui/base';

const PostAd = () => {
    const { categories, userLogedId, token } = useContext(GlobalContext);
    const [activeStep, setActiveStep] = useState(0);
    const [stepsState, setStepsState] = useState({
        0: true,
        1: false,
        2: false,
        3: false,
    });
    const CustomStepper = styled(Stepper)`max-width: 100%;`;
    const [plano, setPlano] = useState("");
    const [imagens, setImagens] = useState([]);
    const [formaDePagamento, setFormaDePagamento] = useState("");
    const [phone, setPhone] = useState("");
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [isLoading, tate(false);
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
    const StyledPaper = styled(Paper)(({ active }) => ({
        padding: "0.5rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        backgroundColor: active ? "blue" : "white",
        color: active ? "white" : "black"
    }));

    const checkFormValidity = () => {
        if (formData.name !== "" && formData.email !== "" && formData.phone !== "" && formData.description !== "" && formData.title !== "") {
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
        const currentDate = new Date();
        const birthdate = new Date(formData.birthdate);
        const ageDiff = currentDate - birthdate;
        const ageInYears = ageDiff / (1000 * 60 * 60 * 24 * 365);
        if (ageInYears < 18) {
            alert("Você deve ter mais de 18 anos .");
            return;
        } else if (ageInYears >= 18) {
            setStepsState(prevState => ({
                ...prevState,
                [activeStep + 1]: true
            }));
        }
        setActiveStep(prevStep => prevStep + 1);


    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setStepsState((prevState) => ({
            ...prevState,
            [activeStep]: false,
            [activeStep - 1]: true,
        }));
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

    const isStepSkipped = (step) => {
        return step === 2 && imagens.length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { category_id, ...dataWithoutCategoryId } = formData;

        if (formData.title.length < 5) {

            alert("O título deve ter no mínimo 5 caracteres.");
            return;
        }

        if (formData.description.length < 20) {

            alert("A descrição deve ter no mínimo 20 caracteres.");
            return;
        }

        try {
            const response = await api.patch(
                `/users/updateUser/${userLogedId} `,
                dataWithoutCategoryId,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {

                alert('Dados atualizados com sucesso!');
            }
        } catch (error) {

            alert('Erro ao atualizar dados.');
            console.error(error);
        }
    };

    return (
        <div>
            <CustomStepper activeStep={activeStep}>
                <Step>
                    <StyledPaper elevation={5} active={stepsState[0]}>
                        Dados
                    </StyledPaper>
                </Step>
                <Step>
                    <StyledPaper elevation={5} active={stepsState[1]}>
                        Plano
                    </StyledPaper>
                </Step>
                <Step>
                    <StyledPaper elevation={5} active={stepsState[2]}>
                        Imagens
                    </StyledPaper>
                </Step>
                <Step>
                    <StyledPaper elevation={5} active={stepsState[3]}>
                        Pag
                    </StyledPaper>
                </Step>
            </CustomStepper>


            {activeStep === 0 && (
                <div>
                    <form
                        style={{ marginTop: "1rem" }}
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
                            <option disabled value="">Categoria</option>
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

                        <textarea
                            style={{ paddingTop: "3rem" }}
                            id="title"
                            className='customization-option'
                            name="title"
                            placeholder="Título do seu anúncio ..."
                            value={formData.title}
                            onChange={handleChange}
                            rows={5}
                            multiline
                        />

                        <textarea
                            style={{ paddingTop: "4rem" }}
                            id="description"
                            className='customization-option'
                            name="description"
                            placeholder="Descrição do seu anúncio. A descrição deve ter no mínimo 20 caracteres."
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                            multiline
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            disabled={buttonDisabled}
                        >
                            Próximo
                        </Button>
                    </form>
                </div>
            )}
            {activeStep === 1 && (
                <div>
                    <form>

                        <select
                            className='customization-option'
                            value={plano}
                            onChange={handlePlanoChange}
                        >
                            <option disabled value="">Selecione seu Plano</option>
                            <option value="plano1">Free</option>
                            <option value="plano2">Premium</option>
                            <option value="plano3">Platina</option>
                        </select>
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            disabled={buttonDisabled}
                        >
                            Próximo
                        </Button>
                        <Button
                            onClick={handleBack}>
                            Voltar
                        </Button>

                    </form>
                </div>
            )}
            {activeStep === 2 && (
                <div>
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
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            disabled={isStepSkipped(activeStep)}>
                            Próximo
                        </Button>
                        <Button
                            onClick={handleBack}>
                            Voltar
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
                            <option disabled value="">Forma de Pagamento:</option>

                            <option value="cartao">
                                Pix
                            </option>
                            <option value="boleto">
                                Boleto
                            </option>
                            <option value="boleto">
                                Dinheiro
                            </option>
                        </select>
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}>
                            Enviar
                        </Button>
                        <Button
                            onClick={handleBack}>
                            Voltar
                        </Button>
                    </form>
                </div>

            )}
        </div>)
}

export default PostAd;