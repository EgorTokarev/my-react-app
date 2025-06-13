// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CardsPage from './pages/CardsPage/CardsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Preloader from './components/Preloader/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="cards" element={<CardsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;