import React from "react";
import { Item } from "../Item";
import './Order.css';

interface Journal {
  id: number,
  imgurl: string,
  name: string,
  date: string
}

interface Props {
  journals: Journal[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  cart: string[];
}

export const Order: React.FC<Props> = ({ journals, setCart, cart }) => {
  return (
    <section className="order" id="order">
      <h2 className="order-title">Журнали</h2>
      <div className="item-list">
        {journals.map(journal => (
          <Item journal={journal} setCart={setCart} cart={cart} />
        ))}
      </div>
    </section>
  );
}