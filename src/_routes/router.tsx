import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from '../app'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/home' element={<Home />} />
        </Route>

        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
