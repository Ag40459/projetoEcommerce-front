import './categories.css';
import { Link } from 'react-router-dom';
import CardProfile from '../../components/CardProfile/cardProfile';
import { useEffect } from 'react';


function categories({ idCategory }) {

    console.log(idCategory);
    // useEffect(() => {
    //     console.log("antes");
    //     if (idCategory) {
    //         console.log("depois");

    //         const fetchUnifiedData = async () => {
    //             try {
    //                 const response = await api.get(`/users/category/${idCategory}`);
    //                 console.log(response.data.users);
    //                 setListCategoryId(response.data.users);
    //                 console.log(listCategoryId);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         };
    //         fetchUnifiedData();
    //     }
    // }, [idCategory]);
    return (
        <div className='container-categories'>
            <div className='container-back-page'>
                <Link
                    style={{ textDecoration: 'none' }}
                    to='/'>

                    Voltar para Home
                </Link>
            </div>
            <CardProfile />

            <footer>
                <a href="">Termos e Condições</a>
                <a href="">Politica de Privacidade</a>
                <a href="">Fale Conosco</a>
                <a id='end' href="">Promover seus Anúncios</a>

            </footer>
        </div>
    )
}

export default categories;