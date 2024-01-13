import React, { ReactElement } from 'react';
import NavBar from './components/NavBar/NavBar.tsx'
import Plantilla_1 from './components/Plantilla_1/Plantilla_1.jsx';
import Plantilla_1_carousel from './components/Plantilla_1/Plantilla_1_carousel.jsx';
import Plantilla_2 from './pages/inicio/inicio.tsx';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Plantilla_1 />
              <Plantilla_1_carousel />
            </div>
          }
        />
        <Route path="/inicio" element={<Plantilla_2 />} />
      </Routes>
    </>
  );
};

export default App;
