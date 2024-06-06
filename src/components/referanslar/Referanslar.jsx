import React from 'react';
import './referanslar.scss';

const references = [
  {
    id: 1,
    title: 'Çocuk Aklı Danışmanlık Merkezi',
    description: 'Çocuk Aklı Danışmanlık Merkezi, çocukların eğitim ve psikolojik gelişimini destekleyen lider bir kurumdur.',
    author: 'Ahmet Yılmaz'
  },
  {
    id: 2,
    title: 'Eğitim ve Gelişim Enstitüsü',
    description: 'Eğitim ve Gelişim Enstitüsü, yenilikçi eğitim yöntemleri ile çocukların potansiyellerini en üst düzeye çıkarmaktadır.',
    author: 'Fatma Kara'
  },
  {
    id: 3,
    title: 'Psikoloji ve Eğitim Merkezi',
    description: 'Psikoloji ve Eğitim Merkezi, öğrencilere bireysel danışmanlık ve grup terapileri sunarak onların sosyal ve akademik başarılarını artırmaktadır.',
    author: 'Mehmet Çelik'
  }
];

const Referanslar = () => {
  return (
    <div className="references-container">
      <h1 className="references-title">Referanslar</h1>
      <div className="references-list">
        {references.map((reference) => (
          <div key={reference.id} className="reference-card">
            <h2 className="reference-title">{reference.title}</h2>
            <p className="reference-description">{reference.description}</p>
            <p className="reference-author">— {reference.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referanslar;
