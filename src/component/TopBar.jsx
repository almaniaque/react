import { Container, Nav, Navbar, Offcanvas, Button, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import LatMen from './LatMen'

function TopBar({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Button variant="secondary" onClick={handleShow} >
                    <Navbar.Brand href="#home">
                        {name}
                        <i className="bi bi-house-door ms-3 p-0 color-info "></i>
                    </Navbar.Brand>
                </Button>
                <Nav className="me-auto">
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/Recette">Recette</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
                <LatMen
                    show={show}
                    handleClose={handleClose}
                />
            </Container>
        </Navbar>
    );
}

export default TopBar;