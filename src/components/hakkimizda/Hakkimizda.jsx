import React from 'react';
import { NavLink } from 'react-router-dom';
import "./hakkimizda.scss";

const Hakkimizda = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1 className="heading">Hakkımızda</h1>
        <p>Özel eğitimde öncü bir kurum olarak, her öğrencinin kendine has potansiyelini ortaya çıkarabilmesi için seçkin öğretmenler, danışmanlar ve psikologlarla çalışıyoruz.</p>
      </section>
      <section className="mission-statement">
        <h2 className="subheading">Misyonumuz</h2>
        <p>Kişisel farklılıkları destekleyen özel çözümler sunarak her öğrencinin eğitimde başarılı olmasını sağlamak.</p>
      </section>
      <section className="vision-statement">
        <h2 className="subheading">Vizyonumuz</h2>
        <p>Eğitimde yenilikçi yaklaşımlarla toplumun her kesimine ulaşarak, her bireyin eğitimle kendi geleceğini şekillendirme fırsatını sunmak.</p>
      </section>
      <section className="team-introduction">
        <div className="team-header">
          <h2 className="subheading">Ekibimiz</h2>
          <NavLink to="/Kadromuz" className="team-link">Ekibi Görüntüle</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;
