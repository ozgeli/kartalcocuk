import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import "../styles/navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="floating-logo">
        <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
      </div>
      <div className="additional-bar">
        <p>Çocuk Aklı Eğitim ve Danışmanlık Merkezi</p>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
  
      <div className="logo-bar">
        <nav className="navBar">
          <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
            <li><NavLink exact="true" to="/" activeclassname="active">ANASAYFA</NavLink></li>
            <li><NavLink to="/Hizmetlerimiz" activeclassname="active">HİZMETLERİMİZ</NavLink></li>
            <li><NavLink to="/Kadromuz" activeclassname="active">KADROMUZ</NavLink></li>
            <li><NavLink to="/Hakkimizda" activeclassname="active">HAKKIMIZDA</NavLink></li>
            <li><NavLink to="/Referanslar" activeclassname="active">REFERANSLAR</NavLink></li>
            <li><NavLink to="/Galeri" activeclassname="active">GALERİ</NavLink></li>
            <li><NavLink to="/Iletisim" activeclassname="active">İLETİŞİM</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="social-media-bar">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon_facebook.png" alt="Facebook" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon_twitter.png" alt="Twitter" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon_instagram.png" alt="Instagram" /></a>
        </div>
     
      </div>
    </header>
  );
}

export default Navbar;
