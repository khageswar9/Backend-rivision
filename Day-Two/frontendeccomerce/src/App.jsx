import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes,Route } from "react-router-dom";
import { Login } from './components/Login';
import { Product } from './components/Products';
import { Address } from './components/Address';
import { Brand } from './components/Brand';
import { Signup } from './components/signup';
import { useNavigate,Link } from 'react-router-dom';
import { Reviews } from './components/reviews';
import { Home } from './components/Home';
import { Navbar } from './components/navbar';
import { Edit } from './components/edit';
import { ProductDetails } from './components/productdetails';
import { Cart } from './components/cart';

function App() {
 
  return (
    <div className="App">
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/brand' element={<Brand/>}></Route>
<Route path='/product' element={<Product/>}></Route>
<Route path='/address' element={<Address/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/reviews' element={<Reviews/>}></Route>
<Route path='/edit' element={<Edit/>}></Route>
<Route path="/:_id" element={<ProductDetails/>}></Route>
<Route path="/cart" element={<Cart/>}></Route>
</Routes>


    </div>
  )
}

export default App
