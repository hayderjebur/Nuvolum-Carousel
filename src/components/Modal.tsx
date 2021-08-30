import React, { useEffect, useRef } from 'react';
import { IModalProps } from '../interface/modal';
import '../Sass/components/modal.scss';

const Modal: React.FC<IModalProps> = ({
  showModal,
  children,
  onClose,
}): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
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
