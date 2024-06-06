import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="left-links">
          <Link to="/">ANASAYFA</Link>
          <Link to="/Hizmetlerimiz">HİZMETLERİMİZ</Link>
          <Link to="/Hakkimizda">HAKKIMIZDA</Link>
        </div>
        
        <div className="social-media-links">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon_instagram.png" alt="Instagram" />
            </a>
          </div>
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className="contact-link">
            <Link to="/Iletisim">İLETİŞİM</Link>
          </div>
        </div>
        
        <div className="right-links">
          <Link to="/Kadromuz">KADROMUZ</Link>
          <Link to="/Galeri">GALERİ</Link>
          <Link to="/Referanslar">REFERANSLAR</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
