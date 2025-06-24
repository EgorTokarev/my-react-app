import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css'; // ✅ Обратите внимание на импорт с переменной styles

interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 3 }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then((data) => {
        const mappedCards: CardData[] = data.slice(0, limit).map((post: any) => ({
          title: post.title,
          description: post.body,
          imageSrc: 'https://picsum.photos/693/438',
        }));

        setCards(mappedCards);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  if (loading) {
    return <p className={styles.loading}>Загрузка карточек...</p>;
  }

  if (error) {
    return <p className={styles.error}>Ошибка: {error}</p>;
  }

  return (
    <div className={styles.cardList}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
};

export default CardList;