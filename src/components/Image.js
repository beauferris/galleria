import Modal from '../components/UI/Modal';

const Image = (props) => {
    return (
        <Modal onClose = {props.onClose}>
            <img src={props.image} />
        </Modal>
    )
}

export default Image;