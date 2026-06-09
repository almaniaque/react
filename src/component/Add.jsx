import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import StarRating from './EditStarRating';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Add({ show, onClose }) {
    const [rating, setRating] = useState(0);

    return (
        <Modal show={show} centered onHide={onClose} data-bs-theme="dark">
            <Modal.Header closeButton>
                <Modal.Title>Ajouter une recette</Modal.Title>
            </Modal.Header>

            <Modal.Body >
                <Form.Group controlId="formFileImage" className="mb-3">
                    <Form.Label>Image de la recette</Form.Label>
                    <Form.Control type="file" accept='.png, .jpg, .jpeg' multiple />
                </Form.Group>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nom de la recette</Form.Label>
                        <Form.Control type="text" placeholder="Nom de la recette" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Select>
                            <option>Select difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Note</Form.Label>
                        <StarRating rating={rating} setRating={setRating} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Annuler
                </Button>

                <Button type='submit' variant="primary" onClick={onClose}>
                    Enregistrer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Add;