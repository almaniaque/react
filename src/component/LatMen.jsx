import { Container, Nav, Navbar, Offcanvas, Button, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

function LatMen({ show, handleClose, ...props }) {


    return (


        <Offcanvas
            show={show}
            onHide={handleClose}
            {...props}
            data-bs-theme="dark">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <h6>Rechercher une recette</h6>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Rechercher"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" variant="secondary">Rechercher</Button>
                        </Col>
                    </Row>
                </Form>
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
                <Form.Check type="checkbox" />
            </Offcanvas.Body>
        </Offcanvas>
    )

};

export default LatMen;