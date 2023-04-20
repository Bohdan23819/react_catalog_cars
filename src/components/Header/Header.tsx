import React from 'react';
import { Nav } from '../Nav';
import './Header.css';

interface Props {
  setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({setIsCart}) => {
  return (
    <header className="App-header" id='header'>
      <div className="header-container">
        <Nav setIsCart={setIsCart} />
        <div className="header-info">
          <h1 className="header-title">
            Україна за Кермом
          </h1>
          <h2 className='header-desc'>
            Культовий автомобільний журнал з 1928 року
          </h2>
          <a className='header-button' href='#about'>Більше</a>
        </div>
      </div>
    </header>
  );
};