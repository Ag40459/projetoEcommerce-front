import './routes.css';
import SignUp from '../SignUp/signUp';
import NavBarProfessional from '../../components/NavBarProfessional/NavBarProfessional';
import Categories from '../Categories/categories';
import SignIn from '../SignIn/signIn';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Initial from '../Initial/initial';
import NavBarInitial from '../../components/NavBarInitial/NavBarInitial';
import ForgotPassword from '../ForgotPassword/forgotPassword';
import ProfessionalHomePage from '../ProfessionalHomePage/professionalHomePage';
import PostAd from '../PostAd/postAd';
import ProfessionalProfile from '../ProfessionalProfile/professionalProfile';
import CreditsProfessional from '../CreditsProfessional/creditsProfessional';
import TransactionHistory from '../TransactionHistory/transactionHistory';
import EditProfileProfessional from '../EditProfileProfessional/editProfileProfessional';
import OurPlans from '../OurPlans/OurPlans';
import YourAdsProfessional from '../YourAdsProfessional/yourAdsProfessional';
import { useState } from 'react';

function ProtectedRoutes({ redirectTo }) {
  const isAutheticated = true;
  return isAutheticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function App() {
  const [idCategory, setIdCategory] = useState('');

  return (
    <div className='container-main'>
      <Routes>

        <Route path='/' element={<NavBarInitial />} >
          <Route path='' element={
            <Initial
              setIdCategory={setIdCategory}
              idCategory={idCategory}
            />} />
        </Route>

        <Route path='/sign-in' element={<NavBarInitial />} >
          <Route path='' element={<SignIn />} />
        </Route>
        <Route path='/sign-up' element={<NavBarInitial />}>
          <Route path='' element={<SignUp />} />
        </Route>
        <Route path='/categories' element={<NavBarInitial />} >
          <Route path='' element={<Categories
            setIdCategory={idCategory}
          />} />
        </Route>
        <Route path='/page-card' element={<NavBarInitial />}>
          <Route path='' element={<ProfessionalProfile />} />
        </Route>
        <Route path='/forgot-password' element={<NavBarInitial />}>
          <Route path='' element={<ForgotPassword />} />
        </Route>
        <Route path='/post-ad' element={<NavBarInitial />}>
          <Route path='' element={<PostAd />} />
        </Route>

        <Route element={<ProtectedRoutes redirectTo={'/sign-in'} />}>

          <Route path='/your-ads-professional' element={<NavBarProfessional />}>
            <Route path='' element={<YourAdsProfessional />} />
          </Route>

          <Route path='/our-plans' element={<NavBarProfessional />}>
            <Route path='' element={<OurPlans />} />
          </Route>

          <Route path='/professional-home' element={<NavBarProfessional />}>
            <Route path='' element={<ProfessionalHomePage />} />
          </Route>

          <Route path='/credits-Professional' element={<NavBarProfessional />}>
            <Route path='' element={<CreditsProfessional />} />
          </Route>

          <Route path='/transaction-history' element={<NavBarProfessional />}>
            <Route path='' element={<TransactionHistory />} />
          </Route>

          <Route path='/edit-profileProfessional' element={<NavBarProfessional />}>
            <Route path='' element={<EditProfileProfessional />} />
          </Route>

        </Route>

      </Routes>

    </div>
  )
}

export default App;