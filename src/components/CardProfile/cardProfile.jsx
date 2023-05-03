import api from '../../services/api';
import { Link } from 'react-router-dom';
import './cardProfile.css';
import React, { useContext, useEffect } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';
import { differenceInYears } from 'date-fns';

function CardProfile() {
    const { idCategory, setListCategoryId, listCategoryId, categories, setIdUserCategory, removeIdUserCategory } = useContext(GlobalContext);

    useEffect(() => {
        removeIdUserCategory()
        if (idCategory) {
            const fetchUnifiedData = async () => {
                try {
                    const response = await api.get(`/users/category/${idCategory}`);
                    setListCategoryId(response.data.users);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUnifiedData();
        }
    }, [idCategory]);

    return (
        <div className='container-cardProfile'>

            {listCategoryId
                &&
                listCategoryId.map(user => (

                    <div className='container-cardProfile-listCategoryId'
                        key={user.id}
                    >
                        <img
                            src={user.image_url}
                            alt="foto fornecido pelo usuário"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://media.istockphoto.com/id/1227139973/pt/vetorial/38-percent-diagrams.jpg?s=612x612&w=0&k=20&c=bTXOcBZQnkOGbkMc1g8DkbFalwiYokuLeFUtazciA9g=";
                            }}
                        />

                        <Link
                            className='link'
                            to='/page-card'
                            onClick={() => setIdUserCategory(user.id)}
                        >
                            <div className='container-cardProfile-description'>
                                <h1>
                                    {user.title}
                                </h1>
                                <h3
                                    id='teste' >
                                    {user.description}
                                </h3>
                                <div className='container-cardProfile-description-detail'>
                                    <p>
                                        {differenceInYears(new Date(), new Date(user.birthdate))} anos
                                    </p>
                                    <p>
                                        {categories.find(category => category.id === user.category_id)?.title}
                                    </p>
                                    <p id='container-cardProfile-description-detail-p'>
                                        {user.city}
                                    </p>
                                </div>

                            </div>
                        </Link>
                    </div>
                ))
            }

        </div>
    )
}

export default CardProfile;
