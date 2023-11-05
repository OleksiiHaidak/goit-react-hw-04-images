import React, { useEffect } from "react";
import css from 'components/Modal/Modal.module.css';

const Modal = ({ closeModal, modalData }) => {
  
  useEffect(() => {
    const keyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', keyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', keyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);
  

    return (
        <div className={css.Overlay} onClick={closeModal}>
             <div className={css.Modal}>
                  <img src={modalData.largeImageURL} alt={modalData.tags} />
             </div>
        </div>
    )};
  
export default Modal;