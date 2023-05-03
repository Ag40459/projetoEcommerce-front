import api from '../../services/api';
import ImgTeste from '../../assets/fotoTeste.jpg'
import IconLeft from '../../assets/arrow-left.svg'
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import './professionalProfile.css';

function ProfessionalProfile() {
    const { idUserCategory, categories } = useContext(GlobalContext);
    const [user, setUser] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    useEffect(() => {
        console.log(user);
        if (idUserCategory) {
            const fetchUnifiedData = async () => {
                try {
                    const response = await api.get(`/users/unified-tabled/${idUserCategory}`);
                    setUser(response.data.user);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUnifiedData();
        }
        setCurrentDate(dayjs().locale('pt-br').format('DD/MM/YYYY'));
    }, [idUserCategory]);

    const getCategoryTitle = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.title : '';
    }

    return (
        <div className='container-professionalProfile'>
            <div className='container-professionalProfile-back'>
                <img
                    style={{ width: '1rem' }}
                    src={IconLeft} alt="seta para esquerda" />
                <Link to='/categories'>
                    Voltar
                </Link>
            </div>
            <div>
                <div className='container-professionalProfile-description'>
                    <div className='container-professionalProfile-description-information'>
                        <div
                            style={{ display: 'flex', gap: '2rem' }}>
                            <p>{currentDate} </p>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <p>{user.birthdate ? `${dayjs().diff(dayjs(user.birthdate), 'year')} anos` : ''}</p>
                            <p>{getCategoryTitle(user.category_id)}</p>
                            <p>{user.city}</p>
                        </div>
                    </div>
                    <div className='container-professionalProfile-description-information-titleDescription'>
                        <h1>{user.name}</h1>
                        <p>
                            {user.description}
                        </p>
                    </div>

                    <div className='container-professionalProfile-image'>
                        {user.image_url && user.image_url.split(',').map((imageUrl, index) => (
                            <img
                                key={index}
                                src={imageUrl}
                                alt={`Imagem ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='container-professionalProfile-contact'>
                <h4>
                    Faça já sua reserva pelo site e tenha a garantia que o profissional é verificado ou seu dinheiro de volta
                </h4>
                <div className='container-professionalProfile-contact-button'>
                    <button>RESERVA</button>
                </div>

            </div>
            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>

            </footer>
        </div>
    )
}

export default ProfessionalProfile;