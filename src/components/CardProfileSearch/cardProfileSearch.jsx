import { Link } from 'react-router-dom';
import './cardProfileSearch.css';
import React, { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';
import { differenceInYears } from 'date-fns';

function CardProfileSearch() {
    const { listResultSearch } = useContext(GlobalContext);
    console.log(listResultSearch);

    return (
        <div className='container-CardProfileSearch'>

            {listResultSearch
                &&
                listResultSearch.map(user => (

                    <div className='container-CardProfileSearch-listResultSearch'
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
                            to='/professional-profile'
                            onClick={() => setIdUserCategory(user.id)}
                        >
                            <div className='container-CardProfileSearch-description'>
                                <h1>
                                    {user.title}
                                </h1>
                                <h3
                                    id='teste' >
                                    {user.description}
                                </h3>
                                <div className='container-CardProfileSearch-description-detail'>
                                    <p>
                                        {differenceInYears(new Date(), new Date(user.birthdate))} anos
                                    </p>
                                    <p>
                                        {listResultSearch.find(resultSearch => resultSearch.id === user.category_id)?.title}
                                    </p>
                                    <p id='container-CardProfileSearch-description-detail-p'>
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

export default CardProfileSearch;
