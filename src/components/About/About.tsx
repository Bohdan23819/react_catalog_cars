import React from "react";
import './About.css';

export const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">Про нас</h2>
      <div className="about-content">
        <div className="about-desc cont">
          <p className="about-text">«Україна – ЗА РУЛЕМ» – культовий автомобільний журнал, що веде свою історію з 1928 року. Видається щомісяця, на території України з квітня 2005 р. і є незаперечним лідером серед автомобільних щомісячників. У журналі є все, що потрібно автомобілістам, початківцям та досвідченим: тести автомобілів, у тому числі порівняльні, поради щодо обслуговування, презентації нових моделей, огляди автоаксесуарів.</p>
        </div>
        <div className="about-pictures cont">
          <img src='https://i.imgur.com/uPMjgk8.jpg' alt="" className="about-pic" />
          <img src="https://i.imgur.com/azM7Gp6.jpg" alt="" className="about-pic" />
          <img src="https://i.imgur.com/pqWIdCB.jpg" alt="" className="about-pic" />
          <img src="https://i.imgur.com/w1N5cEh.jpg" alt="" className="about-pic" />
          <img src="https://i.imgur.com/teV4rXc.jpg" alt="" className="about-pic" />
          <img src="https://i.imgur.com/3NUFTYG.jpg" alt="" className="about-pic" />
          <img src="https://i.imgur.com/BNiTca8.jpg" alt="" className="about-pic" />
          <img src="https://i.imgur.com/2bNOOC1.jpg" alt="" className="about-pic" />
          <img src="https://i.imgur.com/nJ3xkyS.jpg" alt="" className="about-pic" />
        </div>
      </div>
    </section>
  );
};