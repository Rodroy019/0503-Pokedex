import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand='lg' bg='danger' data-bs-theme='light'>
      <Container>
        <Navbar.Brand href=''>
          <img src='../src/assets/images/pokeball.png' height='90' className='d-inline-block align-top' alt='Logo' />
          <img src='../src/assets/images/pokemon.png' height='90' className='d-inline-block align-top' alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-item nav-link' to='./'><i className='fa-solid fa-house' /> Inicio</Link>
            <Link className='nav-item nav-link' to='./galeria'><i className='fa-solid fa-images' /> Pokemones</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
