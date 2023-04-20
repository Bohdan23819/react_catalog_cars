import React from "react";
import './Nav.css';

interface Props {
  setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav: React.FC<Props> = ({setIsCart}) => {
  return (
    <nav className="nav">
      <div className="nav-links">
        <a href="#header" className="nav-link">Головна</a>
        <a href="#about" className="nav-link">Про нас</a>
        <a href="#order" className="nav-link">Журнали</a>
      </div>
      <a 
        href ="#j" 
        className="nav-cart nav-link"
        onClick={() => setIsCart(true)}
      >
        Кошик
      </a>
    </nav>
  );
};