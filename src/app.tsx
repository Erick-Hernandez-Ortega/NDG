import React from 'react';
import NavBar from './components/NavBar/NavBar.tsx'
import Inicio from './pages/inicio/inicio.tsx';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </>
  );
};

export default App;
