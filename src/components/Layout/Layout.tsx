import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BookingModal from '../BookingModal/BookingModal'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="layout">
      <Header onOpenModal={openModal} />
      <main>{children}</main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Layout;