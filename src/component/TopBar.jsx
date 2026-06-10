import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function TopBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid >
                <Navbar.Brand href="#home"><i class="bi bi-house-door"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Acceuil</Nav.Link>
                        <Nav.Link href="/Recette">Recette</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar