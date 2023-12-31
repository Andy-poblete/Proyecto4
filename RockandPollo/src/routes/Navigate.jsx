import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pollos from '../components/Img/Pollitos-rockeros.jpg'

const Navigate = () => {
    return (
        
        <Navbar style={{ backgroundColor: 'rgb(30, 223, 223)' }} >
            <img className="m-1" style={{ width: "50px", height: "50px" }} src={pollos} alt="" />
            <Container >
                    <Navbar.Brand href="#Inicio">RockandPollo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/Menu">Menu</Nav.Link>
                            <Nav.Link as={NavLink} to="/Nosotros">Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigate