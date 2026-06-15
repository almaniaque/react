import Recette from './Recette'
import { Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Add from './Add';


function RecetteListe() {
    const [recipes, setRecettes] = useState([])

    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);


        axios.get('http://localhost:3000/recette')
            .then(response => setRecettes(response.data))
            .catch(error => console.error("Erreur : ", error));
    }

    const handleDeleteShow = () => {
        setShowDelete(true);
    };

    const handleDeleteClose = () => {
        setShowDelete(false);

        axios.get('http://localhost:3000/recette')
            .then(response => setRecettes(response.data))
            .catch(error => console.error("Erreur : ", error));
    }

    useEffect(() => {
        axios.get('http://localhost:3000/recette')
            .then(response => setRecettes(response.data))
            .catch(error => console.error("Erreur : ", error))
    }, []);

    return (
        <>
            <Container>
                <Button variant="secondary" onClick={handleShow}>Ajouter une recette </Button>

                <Row>
                    {recipes.map(recipe => (
                        <Col key={recipes.id} md={4}>
                            <Recette recette={recipe} />
                        </Col>
                    ))}
                </Row>

            </Container>
            <Add show={show} onClose={handleClose} />
        </>
    )
}

export default RecetteListe