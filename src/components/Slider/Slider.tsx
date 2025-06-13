import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const slidesData = [
    {
      title: 'Найдите покой у берегов',
      description: 'Приезжайте и остановитесь в отеле Out-Hut рядом с Марьягер-фьорд в Дании',
      image: './src/assets/images/Intro.jpg'
    },
    {
      title: 'Найдите покой в лесу',
      description: 'Приезжайте и остановитесь в отеле Out-Hut рядом с Марьягер-фьорд в Дании',
      image: './src/assets/images/Intro.jpg'
    },
    {
      title: 'Найдите покой в горах',
      description: 'Приезжайте и остановитесь в отеле Out-Hut рядом с Марьягер-фьорд в Дании',
      image: './src/assets/images/Intro.jpg'
    }
  ];

  return (
    <section className={styles.slider}>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${styles['pagination-bullet']}"></span>`;
          },
        }}
        navigation={{
          nextEl: `.${styles['swiper-button-next']}`,
          prevEl: `.${styles['swiper-button-prev']}`,
        }}
        className={styles.swiper}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles['card__peace-forest']}>
              <img
                src={slide.image}
                alt="Фон слайда"
                className={styles['card__peace-forest-img']}
              />
              <div className={styles['card__peace-content']}>
                <h2 className={styles['card__peace-forest-title']}>{slide.title}</h2>
                <p className={styles['card__peace-forest-description']}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className={styles['swiper-button']}>
          <div className={`${styles['swiper-button-prev']} swiper-button-prev`}>
            <img src="./src/assets/images/icons/left.svg" alt="Previous" />
          </div>
          <div className={`${styles['swiper-button-next']} swiper-button-next`}>
            <img src="./src/assets/images/icons/right.svg" alt="Next" />
          </div>
        </div>

        {/* Custom pagination */}
        <div className={`${styles.pagination} pagination`}></div>
      </Swiper>

      {/* Booking section */}
      <div className={styles['booking--header']}>
        <div className={styles.booking__button}>
          <a href="#">Забронировать хижину</a>
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

export default Slider;