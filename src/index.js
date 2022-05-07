import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import WebFont from 'webfontloader'
import Container from './Elements/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import EditExpenses from './Components/EditExpenses'
import ExpensesByCategory from './Components/ExpensesByCategory'
import ExpensesList from './Components/ExpensesList'
import { Helmet } from 'react-helmet'
import favicon from './imagenes/logo.png'
import Background from './Elements/Background'

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif'],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <Helmet>
        <link rel='shortcut icon' href={favicon} type='image/x-icon' />
      </Helmet>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/edit/:id' element={<EditExpenses />} />
            <Route path='/category' element={<ExpensesByCategory />} />
            <Route path='/expenses-list' element={<ExpensesList />} />
            <Route path='/' element={<App />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Background />
    </>
  </React.StrictMode>
)
