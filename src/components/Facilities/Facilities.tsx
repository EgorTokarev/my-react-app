import React, { useEffect, useState } from 'react';
import styles from './Facilities.module.css';

interface Facility {
  src: string;
  caption: string;
}

const Facilities: React.FC = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);

  // Статические удобства (fallback)
  const defaultFacilities: Facility[] = [
    { src: "./src/assets/images/icons/fridge.svg", caption: "Мини-холодильник" },
    { src: "./src/assets/images/icons/kitchen.svg", caption: "Мини-кухня" },
    { src: "./src/assets/images/icons/coffee.svg", caption: "Кофемашина" },
    { src: "./src/assets/images/icons/Frame.svg", caption: "Электрический чайник для приготовления чая" },
    { src: "./src/assets/images/icons/park.svg", caption: "Парковка" },
    { src: "./src/assets/images/icons/trees.svg", caption: "Захватывающие дух виды" },
    { src: "./src/assets/images/icons/temperature.svg", caption: "Полы с подогревом" },
    { src: "./src/assets/images/icons/plug.svg", caption: "230В" },
    { src: "./src/assets/images/icons/wifi.svg", caption: "Вайфай" },
    { src: "./src/assets/images/icons/shower.svg", caption: "Душ" },
    { src: "./src/assets/images/icons/toilet.svg", caption: "Смывные унитазы" },
    { src: "images/icons/towels.svg", caption: "Постельное белье и полотенца" },
  ];

  useEffect(() => {
    // Загрузка данных из API
    fetch('data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки JSON');
        return res.json();
      })
      .then((data: Facility[]) => {
        setFacilities(data);
      })
      .catch((err) => {
        console.error('Не удалось загрузить данные:', err);
        setFacilities(defaultFacilities);
      });
  }, []);

  return (
    <section className={styles.facilities}>
      <div>
        <h2 className={styles.facilities__title}>Удобства</h2>
        <div className={styles.facilities__content}>
          {facilities.map((item, index) => (
            <figure key={index} className={styles.facilities__item}>
              <img
                className={styles.facilities__img}
                src={item.src}
                alt={item.caption}
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;