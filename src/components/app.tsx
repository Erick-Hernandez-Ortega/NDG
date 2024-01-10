import React, { ReactElement } from 'react';
import NavBar from './NavBar/NavBar.tsx'
import Plantilla_1 from './Plantilla_1/Plantilla_1';
import Plantilla_1_carousel from './Plantilla_1/Plantilla_1_carousel';
import Plantilla_2 from './Plantilla_2/Plantilla_2.tsx';
import Plantilla_3 from './Plantilla_3/Plantilla_3';
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
        <Route path="/P2" element={<Plantilla_2 />} />
        <Route path="/P3" element={<Plantilla_3 />} />
      </Routes>
    </>
  );
};

export default App;
