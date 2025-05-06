import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaUno from './hijos/PaginaUno';
import PaginaDos from './hijos/PaginaDos';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paginauno" element={<PaginaUno />} />
        <Route path="/paginados" element={<PaginaDos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
