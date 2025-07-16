import {Container, Nav, Navbar, NavLink} from "react-bootstrap";

const NavigationBar = () => {
    return(
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">LUMULAFILM</Navbar.Brand>
                <Nav>
                    <NavLink>Home</NavLink>
                    <NavLink>TV Show</NavLink>
                    <NavLink>Movies</NavLink>
                    <NavLink>Latest</NavLink>
                    <NavLink>Mylist</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;