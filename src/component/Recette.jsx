import { RiAlignItemBottomLine } from 'react-icons/ri';
import Accordion from 'react-bootstrap/Accordion';
import { CardText, Card, Button } from 'react-bootstrap';
import StarRating from './StarRating';

function Recette({ recette }) {
    return (

        <Card bg='dark' text='info' className='mt-2 mb-4 border border-info' >

            <Card.Img variant="top" src={recette.image} />
            <Card.Title className='mt-4'><h6>{recette.name}</h6></Card.Title>
            <StarRating rating={recette.rating} />
            <Card.Body>
                <Card.Text >
                    <Accordion defaultActiveKey="0" data-bs-theme="dark" >
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><Card.Title>Ingredients</Card.Title></Accordion.Header>
                            <Accordion.Body>
                                {recette.ingredients.map(ingredients => (
                                    <ul>
                                        <li >
                                            {ingredients}
                                        </li>
                                    </ul>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><Card.Title>Instructions</Card.Title></Accordion.Header>
                            <Accordion.Body>
                                {recette.instructions.map(instructions => (
                                    <ul>
                                        <li >
                                            {instructions}
                                        </li>
                                    </ul>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Card.Text>
                <Card.Footer >
                    <Card.Text>
                        difficulty :

                        <div className={(recette.difficulty === 'Easy') ? 'text-success' : 'text-warning'}>
                            <i class="bi bi-circle-fill" ></i>
                        </div>
                    </Card.Text>
                </Card.Footer>
            </Card.Body>
        </Card >

    );
}



export default Recette;
