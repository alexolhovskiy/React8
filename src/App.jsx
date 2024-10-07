import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Catalog } from './pages/catalog/catalog';
import { Basket } from './pages/basket/basket';
import { useDispatch } from 'react-redux';
import { data } from './components/data/data';
import { getData } from './redux/slices/dataSlice';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getData(JSON.parse(data)));
  },[dispatch])
  

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/basket" element={<Basket/>} />
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
