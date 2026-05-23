import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './page/Layout'
import Home from './page/Home'
import Catgoria from './page/Catgoria'
import Detail from './page/Detail'
import Paymet from './page/Paymet'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Catgoria />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/paymet' element={<Paymet />} />
        </Route>
      </Routes>

    </>
  )
}

export default App