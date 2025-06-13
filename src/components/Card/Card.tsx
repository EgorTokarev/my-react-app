import React from 'react';

interface CardProps {
  title: string;
  description: string;
  linkText?: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, linkText = "Читать далее", imageSrc }) => {
  return (
    <section className="card">
      <div className="card__content-title">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <a className="card__link" href="#">{linkText}</a>
      </div>
      <div className="card__content-img">
        <img className="card__img" src={imageSrc} alt={title} width="693" height="438" />
      </div>
    </section>
  );
};

export default Card;