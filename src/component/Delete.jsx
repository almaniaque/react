import { Button, Modal } from 'react-bootstrap';

function Delete({ showDelete, onClose }) {
    return (
        <Modal
            show={showDelete}
            centered
            onHide={onClose}
            data-bs-theme="dark"
        >
            <Modal.Header closeButton>
                <Modal.Title>Suppression</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Es-tu sûr de vouloir supprimer cette recette ?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Annuler
                </Button>

                <Button variant="danger" onClick={onClose}>
                    Supprimer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Delete;