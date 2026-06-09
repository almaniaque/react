import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import StarRating from './EditStarRating';

function Add() {
    const [rating, setRating] = useState(0);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nom de la recette</Form.Label>
                <Form.Control type="text" placeholder="Nom de la recette" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDifficulty">
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

            <Button variant="primary" type="submit">
                Ajouter
            </Button>
        </Form>
    );
}

export default Add