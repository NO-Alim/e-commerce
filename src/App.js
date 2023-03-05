import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/global/Footer';
import Navbar from './components/global/Navbar';
import PopupMessage from './components/global/PopupMessage';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <PopupMessage />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
