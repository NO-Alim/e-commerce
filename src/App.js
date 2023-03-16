import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/global/Footer';
import Navbar from './components/global/Navbar';
import ScrollToTop from './components/utils/ScrollToTop';
import Checkout from './pages/Checkout';
import FourOFour from './pages/FourOFour';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/search/:str" element={<SearchResult />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
