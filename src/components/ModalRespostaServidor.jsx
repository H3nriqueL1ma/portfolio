import { Button, Modal } from "react-bootstrap";

export default function ModalResposta({ content, show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{backgroundColor: "#C46638"}} closeButton>{content}</Modal.Header>
            </Modal>
        </>
    );
}