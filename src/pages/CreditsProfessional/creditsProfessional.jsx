import { Link } from 'react-router-dom';
import './creditsProfessional.css';

function CreditsProfessional() {
    let chekBox = true;
    let value = 100;


    return (
        <div className='container-creditsProfessional'>
            <div className='container-back-page'>
                <Link className='link' to='/professional-home'>
                    Voltar
                </Link>
            </div>
            <h1>Comprar Créditos</h1>

            <div className='container-creditsProfessional-summary-title'>
                <h4>Os seus créditos no Listta Vip</h4>
                <div className='container-creditsProfessional-summary-balance'>
                    <h6>CRÉDITOS ATUAIS: {0}</h6>
                    <h6>CRÉDITOS USADOS: {0}</h6>
                </div>
                <Link
                    style={{ color: 'red' }}
                    className='link'
                    to={'/transaction-history'}>
                    Ver histórico de transações {"->"}
                </Link>
            </div>

            <div className='container-creditsProfessional-card-credits'>

                <div className='container-creditsProfessional-card-credits-checkbox'>

                    <input
                        type="checkbox"
                        name="cardCredts"
                        id=""
                    />
                    <h3>
                        {15} Créditos
                    </h3>
                </div>

                <div
                    className={`container-creditsProfessional-card-credits-discount ${chekBox ? 'show' : ''}`}
                >
                    {`${3}% DESCONTO`}
                </div>
                <div className='container-creditsProfessional-card-credits-value'>
                    {chekBox && (
                        <div className="old-value">
                            R$ {(value - (value * 0.030)).toFixed(2)}
                        </div>
                    )}
                    <br />
                    <div className="new-value">
                        R$ {(value).toFixed(2)}
                    </div>
                </div>
                <div className='container-creditsProfessional-card-credits-payment'>
                    <div className='container-creditsProfessional-card-credits-payment-total'>
                        <p>TOTAL:</p>
                        <p style={{ fontWeight: 'bold', color: 'blue' }}>R$ {(value).toFixed(2)}</p>

                    </div>
                    <button>PAGAR AGORA</button>
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

export default CreditsProfessional;