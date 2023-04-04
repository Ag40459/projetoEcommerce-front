import './main.css';
import SignUp from '../SignUp/signUp';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../Categories/categories';
import SignIn from '../SignIn/signIn';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Initial from '../Initial/initial';
import NavBarLogged from '../../components/NavBarLogged/NavBarLogged'
import PageCard from '../../PageCard/pageCard';


function ProtectedRoutes({ redirectTo }) {
  const isAutheticated = true;
  return isAutheticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function Main() {

  return (
    <div className='container-main'>
      <Routes>

        <Route path='/' element={<NavBarLogged />} >
          <Route path='' element={<Initial />} />
        </Route>

        <Route path='/sign-in' element={<NavBarLogged />} >
          <Route path='' element={<SignIn />} />
        </Route>

        <Route element={<ProtectedRoutes redirectTo={'/sign-in'} />}>

          <Route path='/sign-up' element={<NavBarLogged />}>
            <Route path='' element={<SignUp />} />

          </Route>

          <Route path='/categories' element={<NavBarLogged />} >
            <Route path='' element={<Categories />} />

          </Route>
          <Route path='/page-card' element={<NavBar />}>
            <Route path='' element={<PageCard />} />

          </Route>

        </Route>

      </Routes>

    </div>
  )
}

export default Main;