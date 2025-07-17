import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/header.css";

const NavigationBar = () => {
    return (
        <Navbar variant="dark" expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand as={Link} to="/">🎬 My Movie App</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="navlink-large">Beranda</Nav.Link>
                    <Nav.Link as={Link} to="/watchlist" className="navlink-large">Watchlist</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
