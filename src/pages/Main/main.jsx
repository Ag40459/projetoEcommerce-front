import './main.css';
import SignUp from '../SignUp/signUp';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../Categories/categories';
import SignIn from '../SignIn/signIn';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Initial from '../Initial/initial';
import NavBarLogged from '../../components/NavBarLogged/NavBarLogged';
import ForgotPassword from '../ForgotPassword/forgotPassword';
import PostAd from '../PostAd/postAd';
import ProfessionalProfile from '../../pages/ProfessionalProfile/professionalProfile';


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
        <Route path='/sign-up' element={<NavBarLogged />}>
          <Route path='' element={<SignUp />} />
        </Route>
        <Route path='/categories' element={<NavBarLogged />} >
          <Route path='' element={<Categories />} />
        </Route>
        <Route path='/page-card' element={<NavBarLogged />}>
          <Route path='' element={<ProfessionalProfile />} />
        </Route>
        <Route path='/forgot-password' element={<NavBarLogged />}>
          <Route path='' element={<ForgotPassword />} />
        </Route>
        <Route path='/post-ad' element={<NavBarLogged />}>
          <Route path='' element={<PostAd />} />
        </Route>

        <Route element={<ProtectedRoutes redirectTo={'/sign-in'} />}>

          <Route path='/page-card' element={<NavBarLogged />}>
            <Route path='' element={<ForgotPassword />} />
          </Route>

        </Route>

      </Routes>

    </div>
  )
}

export default Main;