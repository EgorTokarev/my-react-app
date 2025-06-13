import React from 'react';
import Slider from '../../components/Slider/Slider';
import Card from '../../components/Card/Card';
import ForestCard from '../../components/ForestCard/ForestCard';
import Gallery from '../../components/Gallery/Gallery';
import Facilities from '../../components/Facilities/Facilities';
import AboutUs from '../../components/AboutUs/AboutUs';
import Connection from '../../components/Connection/Connection';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const galleryImages = [
    { src: './src/assets/images/im1.jpg', alt: 'Изображение 1' },
    { src: './src/assets/images/im2.jpg', alt: 'Изображение 2' },
    { src: './src/assets/images/im3.jpg', alt: 'Изображение 3' },
  ];

  return (
    <>
      <Slider />

      <Card
        title="Каюты"
        description="Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly - спроектированы архитектором Сигурдом Ларсеном. Все они имеют открытое пространство с двуспальной кроватью, двуспальным диваном-кроватью, кухней, отдельным туалетом и душем на открытом воздухе. На крыше, окруженной верхушками деревьев, есть терраса, которая находится на высоте около девяти метров над землей. Коттеджи построены вокруг высоких старых деревьев, которые проходят через весь коттедж от пола до потолка."
        imageSrc="./src/assets/images/1.jpg"
      />

      <Gallery images={galleryImages} />

      <ForestCard
        title="Лес"
        description="Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly - спроектированы архитектором Сигурдом Ларсеном. Все они имеют открытое пространство с двуспальной кроватью, двуспальным диваном-кроватью, кухней, отдельным туалетом и душем на открытом воздухе. На крыше, окруженной верхушками деревьев, есть терраса, которая находится на высоте около девяти метров над землей. Коттеджи построены вокруг высоких старых деревьев, которые проходят через весь коттедж от пола до потолка."
        imageSrc="./src/assets/images/map.jpg"
      />

      <Facilities />

      <AboutUs />

      <Connection />

    </>
  );
};

export default HomePage;