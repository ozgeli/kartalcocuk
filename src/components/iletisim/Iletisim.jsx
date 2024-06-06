import React, { useState } from 'react';
import './iletisim.scss';

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/send', { // Update this URL to match your backend deployment
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="iletisim-container">
      <div className="map-and-info">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.8554886041415!2d29.124422315321658!3d41.010025479300886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8df9c3b1d5f%3A0x0!2zS2FybMSta3RlcGUgTWFoYWxsZXNpIMOWYW1sacWfdCBTb2th!5e0!3m2!1str!2str!4v1623838212438!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"></iframe>
        </div>
        <div className="contact-info">
          <h2>İletişim</h2>
          <p>Adres: Karlıktepe Mahallesi Çamlık Sokak</p>
          <p>Tel No: 0216 535 35 35 </p>
        </div>
      </div>
      <div className="contact-form-container">
        <h2 className="form-title">Bize Ulaşın</h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="subject"
              placeholder="Konu"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Ad Soyad"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Mesajınız"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
