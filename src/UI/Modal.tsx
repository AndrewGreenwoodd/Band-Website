import classes from './Modal.module.css';
import React, {ReactNode, useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';

interface BackdropProps {
  isTransparent: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <div className={`${classes.backdrop} ${props.isTransparent ? classes.transparent : ''}`}onClick={props.onClose}
    ></div>
  );
};

interface ModalOverlayProps {
  classes: string;
  children: ReactNode
}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
    <div className={`${classes.modal} ${classes[props.classes]}`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};


interface ModalProps {
  onClose: () => void;
  isTransparent?: boolean;
  classes?: string;
  children:ReactNode
}

const Modal: React.FC<ModalProps> = (props) => {
  const portalElementRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    portalElementRef.current = document.getElementById('overlays');
  }, []);

  return (
     <>
      {portalElementRef.current &&
        ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} isTransparent={props.isTransparent || false} />,
          portalElementRef.current
        )}
      {portalElementRef.current &&
        ReactDOM.createPortal(
          <ModalOverlay classes={props.classes || ''}>{props.children}</ModalOverlay>,
          portalElementRef.current
        )}
    </>
  );
};

export default Modal;