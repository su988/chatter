import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useCallback
} from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalElement = document.getElementById('modal-root');

function Modal({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.key === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={`modal ${fade ? 'modal-fade' : ''}`}>
        <div className='modal-overlay' onClick={close} />

        <div className='modal-body'>{children}</div>
      </div>
    ) : null,
    modalElement
  );
}

export default forwardRef(Modal);
