import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.module.css';

interface HeaderProps {
  onOpenModal?: () => void;
}

const Header: FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="./src/assets/images/logo.jpg" alt="Логотип" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          {[
            { title: 'Главная', path: '/' },
            { title: 'Хижина', path: '/cards' },
            { title: 'Территория', path: '/territory' },
            { title: 'Бронирование', path: '/booking' },
            { title: 'О нас', path: '/about' },
            { title: 'Вопросы', path: '/faq' },
          ].map((item) => (
            <li key={item.title} className={`nav__item ${item.title === 'Главная' ? 'nav__item--active' : ''}`}>
              <Link className="nav__link" to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav_item--language">
          <img className="language" src="./src/assets/images/2.jpg" alt="Язык" />
        </div>
        <div className="reservation">
          <button className="reservation__link" onClick={onOpenModal}>
            Забронировать сейчас
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;