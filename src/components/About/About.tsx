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
          <img src="https://uzr.com.ua/wp-content/uploads/2018/12/Oil-741x486.jpg" alt="" className="about-pic" />
          <img src="https://uzr.com.ua/wp-content/uploads/2023/04/jeep-wrangler-5-741x486.jpg" alt="" className="about-pic" />
          <img src="https://uzr.com.ua/wp-content/uploads/2023/04/2024-mazda3-1-741x486.jpg" alt="" className="about-pic" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LYAhG-UFe-hanjqxcSODDYgW2FEd_UJDIg&usqp=CAU" alt="" className="about-pic" />
          <img src="https://pbs.twimg.com/card_img/1643963961568641024/y1CBudXM?format=jpg&name=large" alt="" className="about-pic" />
          <img src="https://uzr.com.ua/wp-content/uploads/2023/04/volkswagen-passat-1973-265x198.jpg" alt="" className="about-pic" />
          <img src="https://uzr.com.ua/wp-content/uploads/2023/04/qashqai_e-pwr2022_6-265x198.jpg" alt="" className="about-pic" />
          <img src="https://www.avtovzglyad.ru/media/article/2023/03/20/Omoda-045.jpg.740x400_q85_box-0%2C59%2C1600%2C922_crop_detail_upscale.jpg" alt="" className="about-pic" />
          <img src="https://remiz.mk.ua/wp-content/uploads/2020/08/pravilnaya_posadka_za_rulem.jpg" alt="" className="about-pic" />
        </div>
      </div>
    </section>
  );
};