import React from 'react';
import styles from './Connection.module.css';

const Connection: React.FC = () => {
  return (
    <section className={styles.connection}>
      {/* Левая часть — контакты */}
      <div className={styles.connection__content}>
        <h2 className={styles.connection__title}>Оставайтесь с нами на связи</h2>
        <p className={styles.connection__description1}>Вестерборг, Дания</p>
        <p className={styles.connection__description2}>
          +123 456 789 000<br />
          info@theglasshuts.com
        </p>

        {/* Соцсети */}
        <div className={styles['social-network']}>
          <a href="#" className={styles['social-network__img']}>
            <img src="./src/assets/images/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="#" className={styles['social-network__img']}>
            <img src="./src/assets/images/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" className={styles['social-network__img']}>
            <img src="./src/assets/images/icons/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>

      {/* Правая часть — бронирование */}
      <div className={styles.booking}>
        <img
          className={styles.booking__img}
          src="./src/assets/images/homebuy.jpg"
          alt="Изображение хижины"
          width="386"
          height="188"
        />

        <div className={styles.booking__button}>
          <a href="">Забронировать хижину</a>
        </div>

        <div className={styles.booking__box}>
          <span className={styles.booking__top}>from</span>
          <span className={styles.booking__items}>€3.200</span>
          <span className={styles.booking__batton}>per night</span>
        </div>
      </div>
    </section>
  );
};

export default Connection;