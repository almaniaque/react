import Recette from './Recette'
import { Container, Col, Row, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Add from './Add';


function RecetteListe() {
    const [recipes, setRecettes] = useState([])
    const [message, setMessage] = useState(null)
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [selectRecette, setSelectRecette] = useState(null)
    const [suppressId, setSuppressID] = useState("");
    const [suppressName, setSuppressName] = useState("");

    const handleShow = (e, recipe) => {
        if (recipe === null) {
            //ajout de recette
            setModalTitle('Ajouter une recette')
        }
        else {
            //modification de recette
            setModalTitle('Modifier une recette')
        }
        setSelectRecette(recipe);
        setShow(true);
    }


    const handleClose = () => {
        setShow(false);


        axios.get('http://localhost:3000/recette')
            .then(response => setRecettes(response.data))
            .catch(error => console.error("Erreur : ", error));
    }

    const handleDeleteShow = (e, id, name) => {
        setSuppressID(id);
        setSuppressName(name);
        setShowDelete(true);
    };

    const handleDeleteClose = () => {
        setShowDelete(false);
    }

    const handleUpdateShow = () => setShow(true);
    const handleDelete = () => {

        axios.delete(`http://localhost:3000/recette/delete/${suppressId}`)

            .then(response => {
                setMessage(response.data);
                setShowDelete(false);
                return axios.get('http://localhost:3000/recette')
                    .then(response => setRecettes(response.data))
                    .catch(error => console.error("Erreur : ", error))
            })
            .catch(error => console.error("Erreur : ", error));
    }

    useEffect(() => {
        axios.get('http://localhost:3000/recette')
            .then(response => setRecettes(response.data))
            .catch(error => console.error("Erreur : ", error))
    }, []);

    return (
        <>

            <Container >
                {message && (
                    <Alert variant={message.type} dismissible>
                        {message.msg}
                    </Alert>
                )}
                <Button variant="secondary" onClick={(e) => { handleShow(e, null) }} >Ajouter une recette </Button>


                <Row className='mt-4'>

                    {recipes.map(recipe => (
                        <Col key={recipes.id} md={4}>
                            <Recette
                                recette={recipe}
                                handleDeleteShow={handleDeleteShow}
                                showDelete={showDelete}
                                handleDeleteClose={handleDeleteClose}
                                suppressName={suppressName}
                                suppressId={suppressId}
                                handleDelete={handleDelete}
                                handleUpdateShow={handleUpdateShow}
                            />
                        </Col>
                    ))}
                </Row>

            </Container>
            <Add
                show={show}
                onClose={handleClose}
                displayMessage={setMessage}
                modalTitle={setModalTitle}
                recipe={selectRecette}
            />
        </>
    )
}

export default RecetteListe