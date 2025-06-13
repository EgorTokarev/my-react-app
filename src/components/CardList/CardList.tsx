import React from 'react';
import Card from '../Card/Card';

interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

const cardsData: CardData[] = [
  {
    title: 'Каюты',
    description: 'Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly...',
    imageSrc: './src/assets/images/1.jpg',
  },
  {
    title: 'Лес',
    description: 'Коттеджи построены вокруг высоких старых деревьев...',
    imageSrc: './src/assets/images/map.jpg',
  },
  {
    title: 'Галерея',
    description: 'Насладитесь видами с террасы на высоте девяти метров...',
    imageSrc: './src/assets/images/im1.jpg',
  },
  {
    title: 'Удобства',
    description: 'Все каюты оснащены современными удобствами...',
    imageSrc: './src/assets/images/im2.jpg',
  },
  {
    title: 'О нас',
    description: 'Løvtag — это уникальное место для отдыха в гармонии с природой.',
    imageSrc: './src/assets/images/im3.jpg',
  },
];

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 10 }) => {
  const displayedCards = cardsData.slice(0, limit);

  return (
    <div className="card-list">
      {displayedCards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;