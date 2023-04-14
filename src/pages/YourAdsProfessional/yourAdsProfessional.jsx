import { useState } from 'react';
import { Link } from 'react-router-dom';
import './yourAdsProfessional.css';

function YourAdsProfessional() {

    const [historyTransaction, setHistoryTransaction] = useState(true);

    return (
        <div className='container-yourAdsProfessional'>
            <div className='container-back-page'>
                <Link className='link' to='/professional-home'>
                    Voltar
                </Link>
            </div>
            <div className='container-yourAdsProfessional-panel'>

                <h1>Anúncios</h1>
                <div className='container-yourAdsProfessional-painel'>
                    {!historyTransaction
                        ?
                        <div className='container-yourAdsProfessional-transaction-detail'>

                            <h4>Não há anúncios públicado nos últimos 30 dias.</h4>

                        </div>
                        :
                        <div className='container-yourAdsProfessional-transaction-detail'>
                            <h4>Anúncios Ativos: {historyTransaction}</h4>
                            <h4>Anúncios Inativos: {historyTransaction}</h4>
                        </div>
                    }
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

export default YourAdsProfessional;