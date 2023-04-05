import { useState } from 'react';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Link } from 'react-router-dom';
import GreenLateralBar from "../../assets/Green_Horizontal_Progress_Bar.svg";
import GreyLateralBar from "../../assets/Grey_Horizontal_Progress_Bar.svg";
import Phone from "../../assets/phone.svg";
import WhatsappIcon from "../../assets/whatsappIcon.svg";
import './postAd.css';


function searchCep(cep) {
    const cepConverted = cep.replace(" ", "");
    if (cepConverted.length !== 8)
        return setErrorMessageCep("Esse CEP não existe. Digite um CEP válido.");
    fetch(`https:viacep.com.br/ws/${form.cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
            if (data.erro) {
                return setErrorMessageCep(
                    "Esse CEP não existe. Digite um CEP válido."
                );
            } else {
                const apiData = {
                    city: data.localidade,
                    address: data.logradouro,
                    uf: data.uf,
                    neighborhood: data.bairro,
                };
                const newForm = { ...form, ...apiData };
                setForm(newForm);
            }
        });
}

function PostAd() {
    const [text, setText] = useState('Seu Anúncio');
    const [adSteps, setAdSteps] = useState({
        two: false,
        thr: false,
        fou: false,
        fiv: false
    });
    const [valueSelect, selectValueSelect] = useState();
    const [checked, setChecked] = useState(false);

    const handleNext = (e) => {
        if (adSteps.two == false) {
            setAdSteps({ ...adSteps, two: true });
            return setText('Seus Dados');
        } else if (adSteps.thr == false) {
            setAdSteps({ ...adSteps, thr: true });
            return setText('Seus Contatos');
        } else if (adSteps.fou == false) {
            setAdSteps({ ...adSteps, fou: true });
            return setText('Suas Fotos');
        } else if (adSteps.fiv == false) {
            return setAdSteps({ ...adSteps, fiv: true });
        }
    };

    const handleBack = (e) => {
        if (adSteps.fiv == true) {
            return setAdSteps({ ...adSteps, fiv: false });
        } else if (adSteps.fou == true) {
            setAdSteps({ ...adSteps, fou: false });
            return setText('Seus Contatos');
        } else if (adSteps.thr == true) {
            setAdSteps({ ...adSteps, thr: false });
            return setText('Seus Dados');
        } else if (adSteps.two == true) {
            setAdSteps({ ...adSteps, two: false });
            return setText('Seu Anúncio');
        } handleFinish
    };
    const handleFinish = async (e) => {
        // e.preventDefault();

        try {

        } catch (error) {

        }
    };
    const handleSelect = (e) => {
        selectValueSelect(e.target.value);
    };
    const handleChangeZap = (event) => {
        setChecked(event.target.checked);
    };
    const handleChangePhone = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='container-postAd'>
            <div className='container-categories-meuOptions'>
                <Link
                    className='link'
                    to='/'>
                    Voltar para Home
                </Link>
            </div>

            <div className='container-postAd-title'>
                <h4>Publique gratuitamente em apenas algumas etapas!</h4>
            </div>


            <div className="container-postAd-progress">
                <img
                    src={GreenLateralBar}
                    alt="linha verde"
                />
                <img
                    src={adSteps.two ? GreenLateralBar : GreyLateralBar}
                    alt="linha cinza/verde"
                />
                <img
                    src={adSteps.thr ? GreenLateralBar : GreyLateralBar}
                    alt="linha cinza/verde"
                />
                <img
                    src={adSteps.fou ? GreenLateralBar : GreyLateralBar}
                    alt="linha cinza/verde"
                />
            </div>

            <div className='container-postAd-title-announcement'>
                <h2>
                    {text}
                </h2>
                <p>* Campo obrigatórios</p>
            </div>

            <form onSubmit={handleFinish}>

                <div className='container-postAd-form1'
                    style={(adSteps.two)
                        ? { display: 'none' }
                        : { display: 'flex' }}
                >
                    <select
                        className="container-postAd-form1-options">
                        Categoria
                        <option
                            value="">
                            Escolha a Categoria
                        </option>
                        <option
                            value="">
                            Acompanhantes
                        </option>
                        <option
                            value="">
                            Massagista
                        </option>
                    </select>

                    <select
                        className="container-postAd-form1-options">
                        Cidade
                        <option
                            value="">
                            Qual cidade deseja trabalhar?
                        </option>
                        <option
                            value="">
                            Recife
                        </option>

                    </select>
                    <select
                        className="container-postAd-form1-options">
                        Cidade
                        <option
                            value="">
                            Sexo Virtual?
                        </option>
                        <option
                            value="">
                            Sim
                        </option>
                        <option
                            value="">
                            Não
                        </option>

                    </select>

                    <select
                        className="container-postAd-form1-options">
                        Cidade
                        <option
                            value="">
                            Ativar modo on-line?
                        </option>
                        <option
                            value="">
                            Sim
                        </option>
                        <option
                            value="">
                            Não
                        </option>

                    </select>

                </div>

                <div className='container-postAd-form2'
                    style={adSteps.two && !adSteps.thr
                        ? { display: 'flex' }
                        : { display: 'none' }}
                >
                    <div className='container-postAd-form2-input'>

                        <input
                            type="text"
                            id='age'
                            placeholder='Qual Sua idade?' />
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            id='title'
                            placeholder='Dê um bom título ao seu anúncio'
                        />
                        <label htmlFor="description">Descrição</label>
                        <input
                            type="text"
                            id='description'
                            placeholder='Use este espaço para descrever a si mesmo e seu corpo, falar de suas habilidades, do que gosta...' />
                    </div>

                </div>

                <div className='container-postAd-form3'
                    style={adSteps.thr && !adSteps.fou
                        ? { display: 'flex' }
                        : { display: 'none' }}
                >
                    <div className='container-postAd-form3-inputs'>
                        <h3>Como deseja que entre em contato com você?</h3>
                        <div className='container-postAd-form3-inputs-filter-contact'>
                            <select className='container-postAd-form3-select'
                                onChange={handleSelect}
                                name=""
                                id="">
                                <option
                                    value="Nao selecionado">
                                    Selecione uma das Opções abaixo:
                                </option>
                                <option
                                    value="Somente telefone">
                                    Somente telefone
                                </option>
                                <option
                                    value="E-mail e telefone">
                                    E-mail e telefone
                                </option>
                                <option
                                    value="Somente E-mail">
                                    Somente E-mail
                                </option>
                            </select>

                            <div className='container-postAd-form3-select-phone-only'
                                style={valueSelect === 'Somente telefone' || valueSelect === 'E-mail e telefone'
                                    ? { display: 'flex' }
                                    : { display: 'none' }}>
                                <div
                                    style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        style={{ width: '7rem', marginLeft: '-1.2rem' }}
                                        src={Phone}
                                        alt="envelope de email" />
                                    <h3>Número de Telefone</h3>
                                </div>
                                <input type="tel" placeholder='+55 11 98765 4567' />
                                <div
                                    style={{ display: 'flex', marginTop: '2rem', alignItems: 'center', gap: '1rem' }}
                                >
                                    <Switch
                                        checked={checked}
                                        onChange={handleChangeZap}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <img
                                        style={{ width: '4rem' }}
                                        src={WhatsappIcon}
                                        alt="icone zap" />
                                    <p
                                        style={!checked ? { fontSize: '2rem', color: 'lightgray' } : { fontSize: '2rem', color: '#000' }}
                                    >
                                        WhatsApp
                                    </p>
                                </div>
                            </div>

                            <div className='container-postAd-form3-select-phone-only'
                                style={valueSelect === 'Somente E-mail' || valueSelect === 'E-mail e telefone'
                                    ? { display: 'flex' }
                                    : { display: 'none' }}
                            >
                                <div
                                    style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        style={{ width: '5rem' }}
                                        src="/src/assets/email.svg"
                                        alt="envelope de email" />
                                    <h3>Endereço de e-mail</h3>
                                </div>
                                <input type="email" placeholder='Inserir e-mail' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='container-postAd-form4'
                    style={adSteps.fou && !adSteps.fiv
                        ? { display: 'flex' }
                        : { display: 'none' }}>
                    <div className='container-postAd-form4-detail-announcement'>
                        <p>Título: { }</p>
                        <p>Descrição: { }</p>
                        <div
                            style={{ display: 'flex', gap: '2rem' }}>
                            <p>Idade: { }</p>
                            <p>Categoria: { }</p>
                            <p>Cidade: { }</p>
                        </div>
                        <div
                            style={{ display: 'flex', marginTop: '2rem', alignItems: 'center', gap: '1rem' }}
                        >
                            <Switch
                                checked={checked}
                                onChange={(e) => handleChangePhone(e)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <p
                                style={!checked ? { fontSize: '0.9rem', color: 'lightgray' } : { fontSize: '0.9rem', color: '#000' }}
                            >
                                Ao submeter o anúncio, o usuário declara ser maior de 18 anos e concorda que será o único responsável pela veracidade das informações e imagens enviadas à Plataforma SKOKKA.
                                O envio de imagens e dados não autorizados por seus titulares é absolutamente vedado e causará a remoção do anúncio. O usuário está sujeito às penalidades cabíveis na esfera cível e criminal por eventuais danos ou prejuízos causados pelas informações inseridas na plataforma, inclusive perante terceiros.
                            </p>
                        </div>
                    </div>

                    <div className='container-postAd-form4-send-photos'>
                        <div className='container-postAd-form4-send-photos-imgPhoto'>
                            Arraste para aqui até 10 fotos.
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera />
                            </IconButton>
                        </div>
                    </div>
                    <div></div>

                </div>

                <div
                    className='container-postAd-button'
                    style={adSteps.two
                        ? { display: 'flex' }
                        : { display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        type='button'
                        style={adSteps.two
                            ? { display: 'flex' }
                            : { display: 'none' }}
                        onClick={() => handleBack()}
                    >Voltar
                    </button>
                    <button
                        type='submit'
                        style={adSteps.fou
                            ? { display: 'flex' }
                            : { display: 'none' }}
                        onClick={() => handleFinish()}
                    >Finalizar
                    </button>
                    <button
                        style={adSteps.fou
                            ? { display: 'none' }
                            : { display: 'flex' }}
                        type='button'
                        onClick={() => handleNext()}
                    >Próximo
                    </button>

                </div>

            </form >

            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>
            </footer>

        </div >

    )
}

export default PostAd;