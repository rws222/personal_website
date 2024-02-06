import React, { useEffect } from 'react';
import { useModal } from '../../ModalContext.js';
import Button from '../../mui_components/Button.js';
import './Modal.css';

const Modal = () => {
  const { isModalOpen, modalContent, modalBtns, closeModal } = useModal();

  useEffect(() => {
    if (isModalOpen) {
      const modalOverlay = document.querySelector('.Modal-overlay');
      modalOverlay.classList.add('active');
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    const modalOverlay = document.querySelector('.Modal-overlay');
    modalOverlay.classList.remove('active');

    setTimeout(() => {
      closeModal();
    }, 300); // Same duration as the transition

    modalOverlay.addEventListener('transitionend', () => {
      closeModal();
      modalOverlay.classList.remove('active');
    }, { once: true });
  };

  return (
    <div className={`Modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={handleCloseModal}>
      <div className='Modal-content' onClick={(e) => e.stopPropagation()}>
        <span className='Modal-close' onClick={handleCloseModal}>
          &times;
        </span>
        {modalContent}
        <div className='Modal-btns'>
          {modalBtns}
          <Button onClick={handleCloseModal}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;