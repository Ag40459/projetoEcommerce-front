import { useState } from 'react';
import { Link } from 'react-router-dom';
import useNavBarProvider from '../../hooks/useNavBarProvider';
import './transactionHistory.css';

function TransactionHistory() {
    const [historyTransaction, setHistoryTransaction] = useState(true);
    const { userUnifiedTable } = useNavBarProvider();

    if (!userUnifiedTable) {
        return null;
    }

    return (
        <div className='container-transactionHistory'>

            <div className='container-back-page'>
                <Link className='link' to='/credits-Professional'>
                    Voltar
                </Link>
            </div>
            <div className='container-transactionHistory-painel'>
                <h1>Histórico de Transações:</h1>
                {!historyTransaction
                    ?
                    <div className='container-transactionHistory-transaction-detail'>
                        <h4>Não há transações nos últimos 30 dias.</h4>

                    </div>
                    :
                    <div className='container-transactionHistory-transaction-detail'>
                        <h4>transação 01: {historyTransaction}</h4>
                        <h4>transação 02: {historyTransaction}</h4>
                        <h4>transação 03: {historyTransaction}</h4>
                    </div>
                }
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

export default TransactionHistory;