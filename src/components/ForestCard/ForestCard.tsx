import React from 'react';
import styles from './ForestCard.module.css';

interface ForestCardProps {
  title: string;
  description: string;
  linkText?: string;
  imageSrc: string;
}

const ForestCard: React.FC<ForestCardProps> = ({
  title,
  description,
  linkText = 'Читать далее',
  imageSrc,
}) => {
  return (
    <section className={styles.card__forest}>
      <div className={styles['card__forest-img']}>
        <img className={styles.forest__img} src={imageSrc} alt={title} />
        <div className={styles.forest__text}>We Are Here</div>
      </div>
      <div className={styles['card__forest-content']}>
        <h2 className={styles['card__forest-title']}>{title}</h2>
        <p className={styles['card__forest-description']}>{description}</p>
        <a className={styles['card__forest-link']} href="#">
          {linkText}
        </a>
      </div>
    </section>
  );
};

export default ForestCard;