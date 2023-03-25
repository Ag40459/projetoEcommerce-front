import './noticeModal.css';

function NoticeModal() {
    return (
        <div className='container-noticeCard'>
            <div className='container-noticeCard-card'>
                <div className='container-noticeCard-title'>
                    <h1>
                        AVISO AO USUÁRIO
                    </h1>
                </div>
                <div className='container-noticeCard-details'>
                    <h3>
                        * A navegação no site só é permitida para maiores de 18 anos de idade.
                        * A publicação de qualquer anúncio que faça referência a serviços sexuais em troca de dinheiro não é permitida.<p />
                        * Qualquer usuário que carregue material pornográfico envolvendo menores de idade será denunciado imediatamente às autoridades competentes e suspenso da Plataforma.<p />
                        * Ao publicar um anúncio em Vip List, o Usuário confirma que pode acessar o conteúdo com direitos plenos e também declara que todas as pessoas retratadas na(s) imagem(ns) carregada(s) são maiores de idade (maiores de 18 anos) e que recebeu consentimento para publicá-la(s) em List Vip.<p />
                        * Ao clicar no botão "Aceitar", o Usuário confirma que é maior de 18 anos e isenta os provedores de serviços, proprietários e criadores de viplist.com de responsabilidade pelo conteúdo e pela utilização deste serviço.
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default NoticeModal;