import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EditStarRating from './EditStarRating';
import { useEffect, useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';

function Add({ show, onClose }) {

    //const ratinFeedBack = useRef(null)

    const [rating, setRating] = useState(0);

    const [values, setValues] = useState({
        name: "",
        rating: 0,
        difficulty: "",
    });
    const [errors, setErrors] = useState([])

    const [submitted, setSubmitted] = useState(false)

    //changement des info
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    }

    // rating
    const handleRating = (rate) => {
        console.log(rate)
        setValues((prev) => ({ ...prev, ["rating"]: rate }));
    };



    //validation basique
    const validate = () => {
        const newErrors = {};

        if (!values.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!values.difficulty) {
            newErrors.difficulty = "Difficulty is required to select";
        }

        if (values.rating == 0) {
            newErrors.rating = "Select rating";
            //ratinFeedBack.current.style.display='block'
        }
        return newErrors;
    }

    //passage de la verif au click
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(validate())
        const validation = validate();

        if (Object.keys(validation).length > 0) {
            setErrors(validation);
            setSubmitted(false);
        }
        else {
            setErrors({});
            setSubmitted(true);
            console.log("Form submitted", values);

        }
    };

    /*useEffect(() => {
        axios.get('https://dummyjson.com/recipes/add', {
            methode: "POST",
            body: JSON.stringify({
                name: '',
                rating: '',
                difficulty: '',
            })
    
        })
    });*/



    return (
        <Modal
            show={show}
            centered
            onHide={onClose}
            data-bs-theme="dark"
        >
            <Modal.Header closeButton>
                <Modal.Title>Ajouter une recette</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit} noValidate>
                <Modal.Body >

                    <Form.Group
                        controlId="formFileImage"
                        className="mb-3"
                    >
                        <Form.Label>Image de la recette</Form.Label>
                        <Form.Control
                            type="file"
                            accept='.png, .jpg, .jpeg'
                            multiple
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Nom de la recette</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                            placeholder="Nom de la recette"
                            required
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.name}

                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Select
                            name="difficulty"
                            onChange={handleChange}
                            isInvalid={!!errors.difficulty}

                        >
                            <option value="">Select difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.difficulty}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label className="mt-4">Note :

                        </Form.Label>

                        <EditStarRating
                            rating={values.rating}
                            setRating={(rate) => setValues(prev => ({ ...prev, rating: rate }))}
                            name="rating"

                        />
                        <Form.Control
                            type="hidden"
                            isInvalid={!!errors.rating}
                        />
                        <Form.Control.Feedback /*ref={ratingFeedBack}*/ type="invalid">
                            {errors.rating}

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='text-center'>
                        <Button type='submit' variant="primary" >
                            Submit
                        </Button>
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>

                    <Button type='save' variant="primary" onClick={onClose}>
                        Enregistrer
                    </Button>

                </Modal.Footer>
            </Form >
        </Modal >

    );
}

export default Add;