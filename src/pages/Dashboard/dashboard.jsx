import './dashboard.css';
import { Link } from 'react-router-dom';
import CardProfile from '../../components/CardProfile/cardProfile'


function Dashboard() {
    return (
        <div className='container-dashboard'>
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <Link to='/'>Sair</Link>
        </div>
    )
}

export default Dashboard;