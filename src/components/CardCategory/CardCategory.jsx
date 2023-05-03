import { Link } from 'react-router-dom';
import ImgNull from '../../assets/imagemConstrucao.jpg'
import api from '../../services/api';
import { useEffect } from 'react';
import './CardCategory.css';
import React, { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';


export function CardCategory() {

    const { setIdCategory, categories, setCategories, removeIdCategory } = useContext(GlobalContext);


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

    const handleSelectIdCategory = (event) => {
        return setIdCategory(event);

    };

    return (
        <div className='container-cardCategory'>
            {categories.map(category => (
                <div
                    className='container-cardCategory-cards '
                    key={category.id}
                >
                    <Link
                        className='container-cardCategory-customization-Link'
                        onClick={() => handleSelectIdCategory(category.id)}
                        to={'/categories'}
                    >
                        <img
                            src={!category.imageUrl ? ImgNull : category.imageUrl}
                            alt={`imagem da categoria ${category.title}`}
                        />
                        <div className='container-cardCategory-category'>
                            <h2>
                                {category.title}
                            </h2>
                        </div>
                        <div className='container-cardCategory-description'>
                            <h3>
                                {category.description}
                            </h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

// export default CardCategory;
