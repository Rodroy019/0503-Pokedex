import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const HandleMenu = ({ isActive }) => isActive ? 'nav-item nav-link neon linkActivo' : 'nav-item nav-link neon'

  return (
    <Navbar expand='lg' bg='danger' data-bs-theme='light'>
      <Container>
        <Navbar.Brand href=''>
          <img src='../src/assets/images/pokemon.png' height='80' className='d-inline-block align-top' alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink className={HandleMenu} to='./'>
              <img src='../src/assets/images/pokeball.png' height='40' className='d-inline-block' alt='Logo' /> Inicio
            </NavLink>
            <NavLink className={HandleMenu} to='./pokedex'>
              <img src='../src/assets/images/pokedex.png' height='40' className='d-inline-block' alt='Logo' /> Pokedex
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
