import React from 'react';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: { src: string; alt?: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__list}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || ''}
            width="432"
            height="387"
            className={styles.gallery__img}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;