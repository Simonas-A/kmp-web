import React from 'react'
import Header from './components/header/Header'
import Main from './components/Main'
import {Route, Routes} from "react-router-dom";
import Navbar from './components/navbar/navbar'
import HomePage from './pages/Home/HomePage'
import {ROUTES} from './components/routes/routes'
import CarUpload from './pages/CarUpload/CarUpload'
import CarListPage from './pages/CarList/CarListPage';
import EditListing from './components/editListing/EditListing';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={ROUTES.HOME} element = {<HomePage />}></Route>
        <Route path={ROUTES.ADD_LISTING} element = {< CarUpload/>}></Route>
        <Route path={ROUTES.CAR_LIST} element = {< CarListPage/>}></Route>
        <Route path={`${ROUTES.EDIT_LISTING}/:id`} element = {< EditListing/>}></Route>
      </Routes> 
    </> 
  )
}

export default App
