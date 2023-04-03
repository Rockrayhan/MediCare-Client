import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {

  const { user, logOut } = useAuth();

  // const handleLogOut = () => {
  //   localStorage.removeItem("token");
  //   window.location.reload();
  // }

  return (
    <div style={{ marginBottom: '65px' }}>




      <Navbar fixed='top' bg="primary" variant="dark" expand="lg">
        <Container>
          <NavbarBrand className='fw-bold' href='/'>MediCare</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link active ms-3" aria-current="page" to="/home">Home</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/department">Department</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/about">About us</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/contact">Contact</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/doctors">Doctors</NavLink>
              <NavLink className="nav-link active ms-3" aria-current="page" to="/blogs">Blogs</NavLink>
            </Nav>


            <Nav>

              {/* <NavDropdown title="Login/Logout " id="basic-nav-dropdown">

                <NavDropdown.Item href="#action/3.1">
                  <NavLink className="nav-link" aria-current="page" to="/signup2"><button className="btn-success">Sign Up</button></NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <NavLink className="nav-link" aria-current="page" to=""><button onClick={handleLogOut} className="btn-success">Log out</button></NavLink>
                </NavDropdown.Item>

              </NavDropdown> */}


              <span className='user-name'>{user.displayName} </span>


              {
                user?.email ?
                  <NavLink className="nav-link active" aria-current="page" to=""><button onClick={logOut} className="btn btn-danger">Log out</button></NavLink>

                  :

                  <NavLink className="nav-link active" aria-current="page" to="/signin"><button className="btn btn-success">Sign Up</button></NavLink>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  );
};

export default Header;