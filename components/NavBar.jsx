import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand='lg' bg='success' data-bs-theme='light'>
      <Container>
        <Navbar.Brand href=''>
          <img src='../src/assets/images/pokemon.png' height='80' className='d-inline-block align-top' alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-item nav-link neon' to='./'>
              <img src='../src/assets/images/pokeball.png' height='40' className='d-inline-block' alt='Logo' /> Inicio
            </Link>
            <Link className='nav-item nav-link neon' to='./galeria'>
              <img src='../src/assets/images/pokedex.png' height='40' className='d-inline-block' alt='Logo' /> Pokedex
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
