import './Modal.css';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className={'backdrop'} />
    )
}

const ModalOverylay = (props) => {
    return (
        <div className={'modal'}>
            <div className={'content'}>{props.children}</div>
        </div>
    )

}

const portalElement = document.getElementById('overlay');

const Modal = (props) =>{
    return ReactDom.createPortal(
        <>
          <Backdrop onClose={props.onClose}/>
          <ModalOverylay>{props.children}</ModalOverylay>
        </>
    ,portalElement)
}

export default Modal;