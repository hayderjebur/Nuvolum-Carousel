import React, { useEffect, useRef } from 'react';
import '../Sass/components/modal.scss';

const Modal = ({ showModal, children, onClose }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (showModal) {
      modalRef.current?.classList.add('visible');
    } else {
      modalRef.current?.classList.remove('visible');
    }
  }, [showModal]);
  return (
    <div onClick={onClose} ref={modalRef} className='modal__wrap'>
      <div className='modal'>{children}</div>
    </div>
  );
};

export default Modal;
