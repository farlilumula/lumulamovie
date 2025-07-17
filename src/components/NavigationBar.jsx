import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/header.css";
import { useOnlineStatus } from '../hooks/useOnlineStatus'; // Pastikan path sesuai

const NavigationBar = () => {
    const isOnline = useOnlineStatus(); // Gunakan custom hook

    return (
        <Navbar variant="dark" expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand as={Link} to="/">🎬 My Movie App</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="navlink-large">Beranda</Nav.Link>
                    <Nav.Link as={Link} to="/watchlist" className="navlink-large">Watchlist</Nav.Link>
                    <Badge bg={isOnline ? "success" : "danger"} className="ms-4 align-content-center">
                        {isOnline ? "Online" : "Offline"}
                    </Badge>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;