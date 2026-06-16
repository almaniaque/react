import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';


function Delete({ handleDelete, showDelete, onClose, values, suppressName, suppressId, handleDeleteClose }) {




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
                Es-tu sûr de vouloir supprimer la recette {suppressName}?
            </Modal.Body>

            <Modal.Footer>

                <Button variant="danger" onClick={handleDelete}>
                    Supprimer
                </Button>

                <Button variant="secondary" onClick={onClose}>
                    Annuler
                </Button>


            </Modal.Footer>
        </Modal>
    );
}

export default Delete;