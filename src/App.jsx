import React from 'react'
import Header from './components/header/Header'
import Main from './components/Main'
import {Route, Routes} from "react-router-dom";
import Navbar from './components/navbar/navbar'
import HomePage from './pages/Home/HomePage'
import {ROUTES} from './components/routes/routes'
import AddListing from './components/addListing/AddListing';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={ROUTES.HOME} element = {<HomePage />}></Route>
        <Route path={ROUTES.ADD_LISTING} element = {< AddListing/>}></Route>
      </Routes>
    </>
  )
}

export default App
