import React from "react";
import './Item.css';

interface Journal {
  id: number,
  imgurl: string,
  name: string,
  date: string
}

interface Props {
  journal: Journal;
  setCart: React.Dispatch<React.SetStateAction<any[]>>
  cart: any[];
}

export const Item: React.FC<Props> = ({ journal, setCart, cart }) => {

  const addItem = () => {
    setCart([...cart, journal.name]);
    console.log(cart);
    
  }
  
  return (
    <div className="item">
      <img className="item-image" src={journal.imgurl} />
      <h3 className="item-title">{journal.name}</h3>
      <p className="item-desc">{journal.date}</p>
      <a 
        className="item-button"
        onClick={() => addItem()}
      >
        До кошика
      </a>
    </div>
  );
};