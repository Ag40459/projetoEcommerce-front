import './signIn.css';
import { Link } from 'react-router-dom';
import NoticeModal from '../../components/NoticeModal/noticeModal';


function SignIn() {
    return (
        <div className='container-sign-in'>
            {/* <NoticeModal /> */}
            <h1>Sign In</h1>
            <Link to='/categories'>Painel Principal</Link>
            <Link to='/sign-up'>Cadastre-se</Link>
        </div>
    )
}


export default SignIn;