import { RiAlignItemBottomLine } from 'react-icons/ri';
import Accordion from 'react-bootstrap/Accordion';
import { CardText, Card, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import Delete from './Delete'

function Recette({ handleUpdateShow, handleDeleteShow, showDelete, handleDeleteClose, recipes, suppressName, suppressId, recette, handleDelete }) {

    return (
        <>
            <Card bg='dark' text='info' className='mt-2 mb-4 border border-info' >

                <Card.Img variant="top" src={recette.image} />
                <Card.Title className='mt-4'><h6>{recette.name}</h6></Card.Title>
                <StarRating rating={recette.rating} />
                <Card.Body>

                    <Accordion defaultActiveKey="0" data-bs-theme="dark" >
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><Card.Title>Ingredients</Card.Title></Accordion.Header>
                            <Accordion.Body>
                                <ul >
                                    {recette.ingredients.map((ingredients, index) => (
                                        <li key={index}>
                                            {ingredients}
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><Card.Title>Instructions</Card.Title></Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {recette.instructions.map((instructions, index) => (

                                        < li key={index}>
                                            {instructions}
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                    <Card.Footer >
                        <Card.Text>
                            difficulty :</Card.Text>
                        <Card.Text
                            className={(recette.difficulty === 'Easy') ? 'text-success' : 'text-warning'}>
                            <i className="bi bi-circle-fill" ></i>
                        </Card.Text>
                        <Card.Text >
                            <Button variant="secondary" className='m-1' onClick={(e) => { handleUpdateShow(e, recette) }}>Modifier</Button>
                            <Button variant="danger" className='m-1' onClick={(e) => handleDeleteShow(e, recette._id, recette.name)}>Supprimer</Button>
                        </Card.Text>
                    </Card.Footer>
                </Card.Body>
            </Card >
            <Delete
                showDelete={showDelete}
                onClose={handleDeleteClose}
                suppressName={suppressName}
                suppressId={suppressId}
                recette={recipes}
                handleDelete={handleDelete}
            />
        </>
    );
}



export default Recette;
