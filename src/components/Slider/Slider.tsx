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
      title: 'Найдите покой в лесу',
      description: 'Приезжайте и остановитесь в отеле Out Hut рядом с Марьягер-фьорд в Дании',
      image: './src/assets/images/Intro.jpg'
    },
    {
      title: 'Найдите покой в горах',
      description: 'Приезжайте и остановитесь в отеле Out Hut рядом с Марьягер-фьорд в Дании',
      image: './src/assets/images/Intro.jpg'
    },
    {
      title: 'Найдите покой у берегов',
      description: 'Приезжайте и остановитесь в отеле Out Hut рядом с Марьягер-фьорд в Дании',
      image: './src/assets/images/Intro.jpg'
    }
  ];

  return (
    <section className={styles.slider}>
      <div className={styles.swiper}>
        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          pagination={{
            el: `.${styles.pagination}`,
            bulletClass: styles['pagination-bullet'],
            bulletActiveClass: styles['pagination-bullet-active'],
          }}
          navigation={{
            nextEl: `.${styles['swiper-button-right']}`,
            prevEl: `.${styles['swiper-button-left']}`,
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <section className={styles['card__peace-forest']}>
                <img 
                  className={styles['card__peace-forest-img']} 
                  src={slide.image} 
                  alt="" 
                />
                <div className={styles['card__peace-content']}>
                  <h2 className={styles['card__peace-forest-title']}>{slide.title}</h2>
                  <p className={styles['card__peace-forest-description']}>
                    {slide.description.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </section>
            </SwiperSlide>
          ))}

          {/* Пагинация */}
          <div className={`${styles.pagination} pagination`}></div>

          {/* Кнопки навигации */}
          <div className={styles['swiper-button']}>
            <div className={`${styles['swiper-button-left']} swiper-button-left`}>
              <img src="./src/assets/images/icons/left.svg" alt="Previous" />
            </div>
            <div className={`${styles['swiper-button-right']} swiper-button-right`}>
              <img src="./src/assets/images/icons/right.svg" alt="Next" />
            </div>
          </div>
        </Swiper>
      </div>

      {/* Блок бронирования */}
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