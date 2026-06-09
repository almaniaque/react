import Recette from './Recette'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Add from './Add';


function RecetteListe() {
    const [recipes, setRecettes] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then(response => setRecettes(response.data.recipes))
            .catch(error => console.error("Erreur : ", error))
    }, []);
    console.log(recipes)

    return (
        <>
            <Container>
                <Button variant="secondary" onClick={handleShow}>Ajouter une recette</Button>
                <Row>
                    {recipes.map(recipe => (
                        <Col key={recipes.id} md={4}>
                            <Recette recette={recipe} />
                        </Col>
                    ))}
                </Row>

            </Container>

            <Modal show={show} centered onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><Add /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </>


    )
}

export default RecetteListe