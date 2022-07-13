import './App.css'
import React from "react"
import Header from './components/Header'
import Cart from './components/Cart'
import Photos from './components/Photos'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      {/* <Switch>
          <Route >
            <Photos exact path="/"/>
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

      </Switch> */}
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
 
  )
}

export default App;
