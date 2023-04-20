import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { About } from './components/About';
import { Order } from './components/Order';
import { Cart } from './components/Cart';
import { getJournals } from './api/api';

function App() {
  const [isCart, setIsCart] = useState(false);
  const [journals, setJournals] = useState([]);
  const [cart, setCart] = useState<any[]>([]);

  const loadData = async () => {
    try {
      const data = await getJournals();
      setJournals(data);
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <Header setIsCart={setIsCart} />
      <About />
      <Order journals={journals} setCart={setCart} cart={cart} />
      {isCart && <Cart setIsCart={setIsCart} cart={cart} setCart={setCart}/>}
    </div>
  );
}

export default App;
