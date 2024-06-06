import React, { useState } from 'react';
import './kadromuz.scss';

const teamMembers = [
  {
    id: 1,
    name: 'Yasin Öztürk',
    expertise: 'Kurucu Psikolog',
    email: 'yasin@example.com',
    imageUrl: '/images/ozgur.png',
    description: 'Yasin Öztürk has over 20 years of experience in child psychology and special education. He has worked with various institutions and has a deep understanding of developmental psychology. He is passionate about helping children achieve their full potential and works closely with parents to provide comprehensive support.'
  },
  {
    id: 2,
    name: 'Özgür Sarıçan',
    expertise: 'Özel Eğitim Uzmanı/ Psikolog',
    email: 'ozgur@example.com',
    imageUrl: '/images/ozgur.png',
    description: 'Özgür Sarıçan specializes in special education and psychological assessments. With a focus on individualized education programs, he has helped numerous children overcome learning difficulties. His approach is holistic, considering both the emotional and educational needs of his students.'
  },
  {
    id: 3,
    name: 'Yasemin',
    expertise: 'Özel Eğitim Uzmanı / Psikolog',
    email: 'yasemin@example.com',
    imageUrl: '/images/ozgur.png',
    description: 'Yasemin has a deep understanding of special education needs and works closely with children and families to develop effective educational strategies. Her expertise includes working with children with autism, ADHD, and other developmental disorders. She is dedicated to fostering a supportive and inclusive learning environment.'
  },
  {
    id: 4,
    name: 'Yasin Öztürk',
    expertise: 'Kurucu Psikolog',
    email: 'yasin@example.com',
    imageUrl: '/images/ozgur.png',
    description: 'Yasin Öztürk has over 20 years of experience in child psychology and special education. He has worked with various institutions and has a deep understanding of developmental psychology. He is passionate about helping children achieve their full potential and works closely with parents to provide comprehensive support.'
  },
  {
    id: 5,
    name: 'Özgür Sarıçan',
    expertise: 'Özel Eğitim Uzmanı/ Psikolog',
    email: 'ozgur@example.com',
    imageUrl: '/images/ozgur.png',
    description: 'Özgür Sarıçan specializes in special education and psychological assessments. With a focus on individualized education programs, he has helped numerous children overcome learning difficulties. His approach is holistic, considering both the emotional and educational needs of his students.'
  },
  {
    id: 6,
    name: 'Yasemin',
    expertise: 'Özel Eğitim Uzmanı / Psikolog',
    email: 'yasemin@example.com',
    imageUrl: '/images/ozgur.png',
    description: 'Yasemin has a deep understanding of special education needs and works closely with children and families to develop effective educational strategies. Her expertise includes working with children with autism, ADHD, and other developmental disorders. She is dedicated to fostering a supportive and inclusive learning environment.'
  },
];

function Kadromuz() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="kadromuz">
      <h2 className="kadromuz-title">Kadromuz</h2>
      <p className="kadromuz-description">Çocuk Aklı Danışmanlık Merkezi'nin ekibi ile tanışın.</p>
      <div className="team-members-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member" onClick={() => openModal(member)}>
            <div className="member-photo-wrapper">
              <div className="member-photo" style={{ backgroundImage: `url(${member.imageUrl})` }} />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-expertise">{member.expertise}</p>
              <p className="member-email">{member.email}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-image" style={{ backgroundImage: `url(${selectedMember.imageUrl})` }}></div>
            <h2>{selectedMember.name}</h2>
            <p><strong>Expertise:</strong> {selectedMember.expertise}</p>
            <p><strong>Email:</strong> {selectedMember.email}</p>
            <p>{selectedMember.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Kadromuz;
