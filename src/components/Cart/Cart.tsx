import React, { useState } from "react";
import { BooleanLiteral } from "typescript";
import { createOrder } from "../../api/api";
import './Cart.css';

interface Order {
  id: number,
  productName: string,
  name: string,
  adress: string,
  phone: string
}

interface Props {
  setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Cart: React.FC<Props> = ({setIsCart, cart, setCart}) => {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  const removeItem = (index: number) => {
    const arr = cart.filter((item, i) => i !== index);
    setCart(arr);
  }

  const handleOrder = () => {
    const validation = !!name.length && !!adress.length && !!phone.length && !!cart.length;
    setIsValid(validation);
    
    if (validation) {
      const newOrder: Order = {
        id: Math.ceil(Number(new Date())/1000),
        productName: cart.join(', '),
        name,
        adress,
        phone
      }

      createOrder(newOrder);
      setTimeout(() => {
        setCart([]);
        setIsCart(false);
      }, 1500)
    }

  }

  return (
    <div className="cart">
      <div className="cart-container">
        <img
          className="cart-close"
          src="https://www.svgrepo.com/show/167358/cross.svg"
          onClick={() => setIsCart(false)}
        />

        <div className="content-container">
          <div className="ordered">
            <h2 className={`ordered-title ${!isValid && 'error-title'}`}>Корзина</h2>
            {cart.length ? (
                <ul className="order-list">
                  {cart.map((item, i) => (
                    <li className="order-item">
                      {item}
                      <p 
                        className="remove-button"
                        onClick={() => removeItem(i)}
                      >
                        X
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="empty">Пусто</p>
              )
            }
            
          </div>
          <div className="order-info">
          <h2 className="ordered-title">Ваші дані</h2>
            <input 
              className={`order-input ${!isValid && 'error'}`}
              type='text'
              placeholder="Введіть ваше ім'я"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className={`order-input ${!isValid && 'error'}`}
              type='text'
              placeholder="Введіть адресу"
              value={adress}
              onChange={(event) => setAdress(event.target.value)}
            />
            <input
              className={`order-input ${!isValid && 'error'}`}
              type='text'
              placeholder="Введіть номер телефону"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <a 
              className="make-order-button"
              onClick={handleOrder}
            >
              Замовити
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}