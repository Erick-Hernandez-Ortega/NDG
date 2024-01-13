import React from 'react';
import NavBar from './components/NavBar/NavBar.tsx'
import Plantilla_2 from './pages/inicio/inicio.tsx';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Plantilla_2 />} />
      </Routes>
    </>
  );
};

export default App;
