// src/components/Layout/Layout.tsx
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BookingModal from '../BookingModal/BookingModal';
import { Outlet } from 'react-router-dom'; // <-- добавлен

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Outlet /> {/* <-- здесь будут рендериться страницы */}
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Layout;