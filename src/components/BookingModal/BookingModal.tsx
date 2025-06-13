import React, { useRef } from 'react';
import styles from './BookingModal.module.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена!');
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div ref={modalRef} className={styles.modal} onClick={handleOutsideClick}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Бронирование домика</h2>
              <span className={styles.close} onClick={onClose}>
                &times;
              </span>
            </div>

            <div className={styles.modalBody}>
              <form id="bookingForm" className={styles.bookingForm} onSubmit={handleSubmit}>
                {/* Ваши поля формы */}
                <div className={styles.formGroup}>
                  <label htmlFor="name">Ваше имя:</label>
                  <input type="text" id="name" name="name" required placeholder="Иван Иванов" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required placeholder="example@mail.com" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Телефон:</label>
                  <input type="tel" id="phone" name="phone" required placeholder="+7 (999) 123-45-67" />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="checkin">Дата заезда:</label>
                    <input type="date" id="checkin" name="checkin" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="checkout">Дата выезда:</label>
                    <input type="date" id="checkout" name="checkout" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="hut">Выберите домик:</label>
                  <select id="hut" name="hut" required defaultValue="">
                    <option value="" disabled>
                      -- Выберите вариант --
                    </option>
                    <option value="et">Домик "Et"</option>
                    <option value="ro">Домик "Ro"</option>
                    <option value="ly">Домик "Ly"</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="guests">Количество гостей:</label>
                  <input type="number" id="guests" name="guests" min="1" max="4" defaultValue="2" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="comments">Дополнительные пожелания:</label>
                  <textarea id="comments" name="comments" rows={3} placeholder="Особые требования, аллергии и т.д." />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;