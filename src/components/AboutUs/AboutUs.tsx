import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <section className={styles['about-us']}>
      <div className={styles['about-us__content']}>
        <img
          className={styles['about-us__img']}
          src="./src/assets/images/block/1.jpg"
          alt="О нас изображение 1"
          width="704"
          height="559"
        />
      </div>
      <div className={styles['about-us__content']}>
        <img
          className={styles['about-us__img']}
          src="./src/assets/images/block/2.jpg"
          alt="О нас изображение 2"
          width="704"
          height="559"
        />
      </div>
      <a href="#" className={styles['about-us__description']}>
        Подробнее о нас
      </a>
    </section>
  );
};

export default AboutUs;