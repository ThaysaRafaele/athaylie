import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product) {
      setCart([...cart, product]);
    }
    
    setCartItems(cartItems + 1);
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <main>
        <HeroSection addToCart={addToCart} />
        <ProductsSection addToCart={addToCart} />
         <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;