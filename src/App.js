import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import LandingPage from './components/layout/LandingPage';
import { useTranslation } from "react-i18next";
import PrivateRoute from './components/common/PrivateRoute'
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import YourAccount from './components/YourAccount/YourAccount';
import setAuthToken from './utils/setAuthToken'
import { SET_LOGIN_USER } from './redux/actions/types'
import PasswordChange from './components/PasswordChange/PasswordChange'
import SellerIntro from './components/SellerAccount/SellerIntro'
import YourAddresses from './components/YourAddresses/YourAddresses'
import NewAddress from './components/NewAddress/NewAddress'

// check localStorage for data
if (localStorage.jwtToken && localStorage.user) {
  // setAuthToken to HTTP header
  setAuthToken(localStorage.jwtToken)

  // redux setup for user data
  store.dispatch({ type: SET_LOGIN_USER, payload: JSON.parse(localStorage.user) })

}

function App() {
  const [t, i18n] = useTranslation('common');

  return (
    <Provider store={store}>
      <Router>
        <Navbar t={t} i18n={i18n} />
        <Routes>
          <Route path="/" element={<LandingPage t={t} i18n={i18n} />} />
          <Route path="/login" element={<Login t={t} i18n={i18n} />} />
          <Route path="/register" element={<Register t={t} i18n={i18n} />} />
          <Route
            path="/your_account"
            element={
              <PrivateRoute>
                <YourAccount t={t} i18n={i18n} />
              </PrivateRoute>
            }
          />
          <Route
            path="/password_change"
            element={
              <PrivateRoute>
                <PasswordChange t={t} i18n={i18n} />
              </PrivateRoute>
            }
          />
          <Route
            path="/seller_intro"
            element={
              <PrivateRoute>
                <SellerIntro t={t} i18n={i18n} />
              </PrivateRoute>
            }
          />
          <Route
            path="/your_addresses"
            element={
              <PrivateRoute>
                <YourAddresses t={t} i18n={i18n} />
              </PrivateRoute>
            }
          />
          <Route
            path="/add_new_address"
            element={
              <PrivateRoute>
                <NewAddress t={t} i18n={i18n} />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer t={t} i18n={i18n} />
      </Router>
    </Provider>
  )
}

export default App;