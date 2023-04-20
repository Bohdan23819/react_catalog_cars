import React, { useState } from "react";
import { BooleanLiteral } from "typescript";
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

  const removeItem = (index: number) => {
    const arr = cart.filter((item, i) => i !== index);
    setCart(arr);
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
            <h2 className="ordered-title">Корзина</h2>
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
                <p>Пусто</p>
              )
            }
            
          </div>
          <div className="order-info">
            <input 
              className="order-input"
              type='text'
              placeholder="Введіть ваше ім'я"
            />
            <input
              className="order-input"
              type='text'
              placeholder="Введіть адресу"
            />
            <input
              className="order-input"
              type='text'
              placeholder="Введіть номер телефону"
            />
          </div>
        </div>
      </div>
    </div>
  );
}