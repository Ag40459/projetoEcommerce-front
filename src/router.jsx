import Home from './pages/home/home';
import Categories from '../src/pages/Categories/categories';
import ForgotPassword from '../src/pages/ForgotPassword/forgotPassword';
import OurPlans from '../src/pages/OurPlans/OurPlans';
import ProfessionalProfile from '../src/pages/ProfessionalProfile/professionalProfile';
import SignIn from '../src/pages/SignIn/signIn';
import SignUp from '../src/pages/SignUp/signUp';
import ProfessionalHomePage from '../src/pages/ProfessionalHomePage/professionalHomePage';
import CreditsProfessional from '../src/pages/CreditsProfessional/creditsProfessional';
import TransactionHistory from '../src/pages/TransactionHistory/transactionHistory';
import YourAdsProfessional from '../src/pages/YourAdsProfessional/yourAdsProfessional';
import PostAd from '../src/pages/PostAd/postAd';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SearchResult from './pages/SearchResult/searchResult';
import EditProfileProfessional from './pages/EditProfileProfessional/editProfileProfessional';
import React, { useContext } from "react";
import { GlobalContext } from '../src/contexts/GlobalContext';

function ProtectedRoutes({ redirectTo }) {
  const { token } = useContext(GlobalContext);

  return token ? <Outlet /> : <Navigate to={redirectTo} />
}

function Main() {

  return (
    <div className='container-main'>
      <Routes>

        <Route
          path='/'
          element={
            <Home />
          } />

        <Route
          path='/sign-in'
          element={
            <SignIn />
          } />

        <Route
          path='/sign-up'
          element={
            <SignUp />
          } />

        <Route
          path='/categories'
          element={
            <Categories />
          } />

        <Route
          path='/professional-profile'
          element={
            <ProfessionalProfile />
          } />

        <Route
          path='/forgot-password'
          element={
            <ForgotPassword />
          } />

        <Route
          path='/post-ad'
          element={
            <PostAd />
          } />

        <Route
          path='/search-result'
          element={
            <SearchResult />
          } />

        <Route element={<ProtectedRoutes redirectTo={'/'} />}>

          <Route path='/professional-home' element={<ProfessionalHomePage />} />

          <Route path='/our-plans' element={<OurPlans />} />

          <Route path='/transaction-history' element={<TransactionHistory />} />

          <Route path='/your-ads-professional' element={<YourAdsProfessional />} />

          <Route path='/credits-professional' element={<CreditsProfessional />} />

          <Route path='/edit-profileProfessional' element={<EditProfileProfessional />} />



        </Route>

      </Routes>

    </div>
  )
}

export default Main;
