import React, { useState } from 'react';
import "./galeri.scss";

const Galeri = () => {
  const [modalImg, setModalImg] = useState(null);

  const imagePaths = [
    '/images/galeri1.jpg',
    '/images/galeri2.jpg',
    '/images/galeri3.jpg',
    '/images/galeri1.jpg',
    '/images/galeri2.jpg',
    '/images/galeri3.jpg',
  ];

  const openModal = (src) => {
    setModalImg(src);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <div className="galeri">
      <div className="gallery-grid">
        {imagePaths.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(src)}>
            <img src={src} alt={`example images from school environment ${index + 1}`} />
          </div>
        ))}
      </div>
      {modalImg && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img src={modalImg} alt="Enlarged pic" className="modal-content" />
          <div className="overlay"></div>
        </div>
      )}
    </div>
  )
}

export default Galeri;
