
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarImport() {
  return (
    <Navbar bg='dark' className='nm' variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Weather App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Creted by: <a href="#login">Jairo Amaya</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarImport;
