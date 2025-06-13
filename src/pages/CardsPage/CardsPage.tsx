// src/pages/CardsPage/CardsPage.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div>
      <h1>Карточки</h1>
      <p>Показано: {limit}</p>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;