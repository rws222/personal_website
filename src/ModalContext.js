import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [modalBtns, setModalBtns] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content, btns) => {
    setModalContent(content);
    setModalBtns(btns);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, modalBtns, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};