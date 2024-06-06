import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anasayfa from './components/anasayfa/Anasayfa';
import Galeri from './components/galeri/Galeri';
import Hakkimizda from './components/hakkimizda/Hakkimizda';
import Hizmetlerimiz from './components/hizmetlerimiz/Hizmetlerimiz';
import Iletisim from './components/iletisim/Iletisim';
import Kadromuz from './components/kadromuz/Kadromuz';
import Referanslar from './components/referanslar/Referanslar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="/kadromuz" element={<Kadromuz />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/referanslar" element={<Referanslar />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
