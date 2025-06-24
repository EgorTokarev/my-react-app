// src/pages/CardsPage.tsx

import React from 'react';
import CardList from '../../components/CardList/CardList';

const CardsPage: React.FC = () => {
  return (
    <div>
      <h1>Карточки</h1>
      <CardList limit={5} />
    </div>
  );
};

export default CardsPage;